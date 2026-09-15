(function () {
  "use strict";

  const EXAMS = {
    core1: {
      key: "core1",
      code: "220-1101",
      name: "CompTIA A+ Core 1",
      maxQuestions: 90,
      minutes: 90,
      passScore: 675,
      scaleMax: 900,
      domains: CORE1_DOMAINS,
      questions: CORE1_QUESTIONS
    },
    core2: {
      key: "core2",
      code: "220-1102",
      name: "CompTIA A+ Core 2",
      maxQuestions: 90,
      minutes: 90,
      passScore: 700,
      scaleMax: 900,
      domains: CORE2_DOMAINS,
      questions: CORE2_QUESTIONS
    }
  };

  const PASS_THRESHOLD_PCT = 78; // study-mode pass bar (~ comparable to real scaled pass scores)

  // ---------------- state ----------------
  let state = {
    examKey: null,
    mode: "fixed",   // "fixed" | "continuous"
    order: [],       // fixed mode: shuffled+prepared question objects
    lapQueue: [],    // continuous mode: shuffled raw questions for the current lap
    lapPointer: 0,   // continuous mode: position within lapQueue
    currentQ: null,  // continuous mode: the currently displayed prepared question
    index: 0,
    answers: [],     // { question, selectedIndex, correctIndex, correct }
    answeredCurrent: false,
    selectedIndex: null
  };

  // ---------------- helpers ----------------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function letterFor(i) {
    return String.fromCharCode(65 + i);
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function show(screenId) {
    ["screen-home", "screen-quiz", "screen-results"].forEach((id) => {
      $("#" + id).hidden = id !== screenId;
    });
  }

  // ---------------- home screen ----------------
  function renderHome() {
    Object.values(EXAMS).forEach((exam) => {
      const domainsWrap = $(`#domains-${exam.key}`);
      domainsWrap.innerHTML = "";
      Object.entries(exam.domains).forEach(([name, pct]) => {
        const row = document.createElement("div");
        row.className = "domain-bar-row";
        row.innerHTML = `
          <span>${name}</span>
          <span>${pct}%</span>
          <div class="domain-bar-track"><div class="domain-bar-fill" style="width:${pct * 2.4}%"></div></div>
        `;
        domainsWrap.appendChild(row);
      });
      $(`#count-${exam.key}`).textContent = exam.questions.length;
      $(`#hard-count-${exam.key}`).textContent = exam.questions.filter((q) => q.difficulty === "hard").length;
    });
  }

  function attachHomeEvents() {
    $all("[data-start-exam]").forEach((btn) => {
      btn.addEventListener("click", () =>
        startExam(btn.getAttribute("data-start-exam"), btn.getAttribute("data-mode") || "fixed")
      );
    });
  }

  // ---------------- quiz screen ----------------
  function startExam(examKey, mode) {
    const exam = EXAMS[examKey];
    state = {
      examKey,
      mode: mode === "continuous" ? "continuous" : "fixed",
      order: [],
      lapQueue: [],
      lapPointer: 0,
      currentQ: null,
      index: 0,
      answers: [],
      answeredCurrent: false,
      selectedIndex: null
    };

    if (state.mode === "fixed") {
      state.order = shuffle(exam.questions).map(prepareQuestion);
    } else {
      state.lapQueue = shuffle(exam.questions);
      state.lapPointer = 0;
      state.currentQ = prepareQuestion(nextRawQuestion());
    }

    $("#quiz-exam-name").textContent =
      `${exam.name} (${exam.code}) — ${state.mode === "continuous" ? "Continuous Practice" : "Fixed-Length Test"}`;
    show("screen-quiz");
    renderQuestion();
  }

  // Pulls the next raw (unshuffled-choices) question for continuous mode.
  // When a lap of the full bank is exhausted, reshuffles a new lap, avoiding
  // an immediate repeat of the last question shown.
  function nextRawQuestion() {
    if (state.lapPointer >= state.lapQueue.length) {
      const lastId = state.lapQueue.length ? state.lapQueue[state.lapQueue.length - 1].id : null;
      const exam = EXAMS[state.examKey];
      let newLap = shuffle(exam.questions);
      if (lastId && newLap.length > 1 && newLap[0].id === lastId) {
        const swapIdx = 1 + Math.floor(Math.random() * (newLap.length - 1));
        [newLap[0], newLap[swapIdx]] = [newLap[swapIdx], newLap[0]];
      }
      state.lapQueue = newLap;
      state.lapPointer = 0;
    }
    return state.lapQueue[state.lapPointer++];
  }

  function prepareQuestion(q) {
    const pairs = q.choices.map((text, i) => ({ text, isCorrect: i === q.answer }));
    const shuffled = shuffle(pairs);
    return {
      id: q.id,
      domain: q.domain,
      difficulty: q.difficulty || "standard",
      question: q.question,
      explanation: q.explanation,
      choices: shuffled.map((p) => p.text),
      correctIndex: shuffled.findIndex((p) => p.isCorrect)
    };
  }

  function currentQuestion() {
    return state.mode === "fixed" ? state.order[state.index] : state.currentQ;
  }

  function renderQuestion() {
    const q = currentQuestion();
    const isContinuous = state.mode === "continuous";
    const total = isContinuous ? null : state.order.length;

    $("#q-domain-tag").textContent = q.domain;
    $("#q-difficulty-tag").hidden = q.difficulty !== "hard";
    $("#q-progress-label-current").textContent = state.index + 1;
    $("#q-progress-total-wrap").hidden = isContinuous;
    if (!isContinuous) $("#q-progress-label-total").textContent = total;
    $("#progress-track").hidden = isContinuous;
    if (!isContinuous) $("#q-progress-fill").style.width = ((state.index) / total * 100) + "%";
    $("#q-score-tag").textContent = `Score so far: ${state.answers.filter(a => a.correct).length}/${state.answers.length}`;
    $("#question-text").textContent = q.question;

    const choicesWrap = $("#choices");
    choicesWrap.innerHTML = "";
    q.choices.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.type = "button";
      btn.innerHTML = `<span class="letter">${letterFor(i)}</span><span class="choice-text">${text}</span>`;
      btn.addEventListener("click", () => selectChoice(i));
      choicesWrap.appendChild(btn);
    });

    $("#feedback-banner").hidden = true;
    $("#explanation-box").hidden = true;
    $("#check-btn").disabled = true;
    $("#check-btn").hidden = false;
    $("#next-btn").hidden = true;
    $("#next-btn").textContent = (!isContinuous && state.index === total - 1) ? "See Results" : "Next Question";
    $("#finish-btn").hidden = !isContinuous;
    $("#finish-btn").disabled = state.answers.length === 0;

    state.answeredCurrent = false;
    state.selectedIndex = null;
  }

  function selectChoice(i) {
    if (state.answeredCurrent) return;
    state.selectedIndex = i;
    $all(".choice").forEach((el, idx) => {
      el.classList.toggle("selected", idx === i);
    });
    $("#check-btn").disabled = false;
  }

  function checkAnswer() {
    if (state.selectedIndex === null || state.answeredCurrent) return;
    const q = currentQuestion();
    const correct = state.selectedIndex === q.correctIndex;
    state.answeredCurrent = true;

    state.answers.push({
      id: q.id,
      domain: q.domain,
      difficulty: q.difficulty,
      question: q.question,
      choices: q.choices,
      explanation: q.explanation,
      selectedIndex: state.selectedIndex,
      correctIndex: q.correctIndex,
      correct
    });

    $all(".choice").forEach((el, idx) => {
      el.classList.add("disabled");
      el.disabled = true;
      if (idx === q.correctIndex) el.classList.add("correct");
      if (idx === state.selectedIndex && idx !== q.correctIndex) el.classList.add("incorrect");
    });

    const banner = $("#feedback-banner");
    banner.hidden = false;
    banner.className = "feedback-banner " + (correct ? "correct" : "incorrect");
    banner.textContent = correct
      ? "✔ Correct!"
      : `✘ Incorrect — the correct answer is highlighted in green.`;

    const explBox = $("#explanation-box");
    explBox.hidden = false;
    explBox.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;

    $("#check-btn").hidden = true;
    $("#next-btn").hidden = false;
    $("#q-score-tag").textContent = `Score so far: ${state.answers.filter(a => a.correct).length}/${state.answers.length}`;
    $("#finish-btn").disabled = false;
    if (state.mode === "fixed") {
      $("#q-progress-fill").style.width = ((state.index + 1) / state.order.length * 100) + "%";
    }
  }

  function nextQuestion() {
    if (!state.answeredCurrent) return;
    if (state.mode === "fixed") {
      if (state.index < state.order.length - 1) {
        state.index++;
        renderQuestion();
      } else {
        renderResults();
        show("screen-results");
      }
    } else {
      state.index++;
      state.currentQ = prepareQuestion(nextRawQuestion());
      renderQuestion();
    }
  }

  function finishContinuous() {
    if (state.answers.length === 0) return;
    renderResults();
    show("screen-results");
  }

  // ---------------- results screen ----------------
  function renderResults() {
    const exam = EXAMS[state.examKey];
    const total = state.answers.length;
    const correctCount = state.answers.filter((a) => a.correct).length;
    const pct = Math.round((correctCount / total) * 100);
    const pass = pct >= PASS_THRESHOLD_PCT;

    $("#results-exam-name").textContent = `${exam.name} (${exam.code}) — Results`;
    $("#score-pct").textContent = pct + "%";
    $("#score-frac").textContent = `${correctCount} / ${total} correct`;
    const circle = $("#score-circle");
    circle.className = "score-circle " + (pass ? "pass" : "fail");
    const verdict = $("#verdict-line");
    if (pass) {
      verdict.textContent = `Nice work — that's above the ${PASS_THRESHOLD_PCT}% study-mode passing bar for this practice set.`;
      verdict.className = "verdict-line pass-text";
    } else {
      verdict.textContent = `That's below the ${PASS_THRESHOLD_PCT}% study-mode passing bar — review the focus areas below and try again.`;
      verdict.className = "verdict-line fail-text";
    }

    // Domain breakdown
    const domainStats = {};
    Object.keys(exam.domains).forEach((d) => (domainStats[d] = { correct: 0, total: 0 }));
    state.answers.forEach((a) => {
      domainStats[a.domain].total++;
      if (a.correct) domainStats[a.domain].correct++;
    });

    const domainWrap = $("#domain-breakdown");
    domainWrap.innerHTML = "";
    const weakDomains = [];

    Object.entries(domainStats).forEach(([domain, stat]) => {
      if (stat.total === 0) return;
      const dpct = Math.round((stat.correct / stat.total) * 100);
      let tier = "strong";
      if (dpct < 60) tier = "weak";
      else if (dpct < 80) tier = "mid";
      if (dpct < 80) weakDomains.push({ domain, dpct, weight: exam.domains[domain] });

      const row = document.createElement("div");
      row.className = "domain-result-row";
      row.innerHTML = `
        <span class="dr-name">${domain}</span>
        <span class="dr-score ${tier}">${stat.correct}/${stat.total} (${dpct}%)</span>
        <div class="dr-track"><div class="dr-fill ${tier}" style="width:${dpct}%"></div></div>
      `;
      domainWrap.appendChild(row);
    });

    const focusBox = $("#study-focus");
    if (weakDomains.length === 0) {
      focusBox.hidden = true;
    } else {
      focusBox.hidden = false;
      weakDomains.sort((a, b) => b.weight - a.weight || a.dpct - b.dpct);
      const items = weakDomains
        .map((w) => `<li><strong>${w.domain}</strong> — scored ${w.dpct}% (this domain is worth ~${w.weight}% of the real exam)</li>`)
        .join("");
      focusBox.innerHTML = `<strong>Recommended study focus</strong><ul style="margin:6px 0 0 18px; padding:0;">${items}</ul>`;
    }

    // Review list
    renderReview("all");
    attachFilterEvents();
  }

  function renderReview(filter) {
    const wrap = $("#review-list");
    wrap.innerHTML = "";
    const items = state.answers.filter((a) => {
      if (filter === "incorrect") return !a.correct;
      if (filter === "correct") return a.correct;
      if (filter === "hard") return a.difficulty === "hard";
      return true;
    });

    if (items.length === 0) {
      wrap.innerHTML = `<p style="color:var(--muted); font-size:14px;">No questions in this filter.</p>`;
      return;
    }

    items.forEach((a) => {
      const div = document.createElement("div");
      div.className = "review-item";
      const userAnswerText = a.choices[a.selectedIndex];
      const correctAnswerText = a.choices[a.correctIndex];
      div.innerHTML = `
        <div class="rq-head">
          <span class="rq-domain">${a.domain}${a.difficulty === "hard" ? ' <span class="difficulty-tag hard">HARD</span>' : ""}</span>
          <span class="rq-status ${a.correct ? "correct" : "incorrect"}">${a.correct ? "Correct" : "Incorrect"}</span>
        </div>
        <p class="rq-question">${a.question}</p>
        ${a.correct
          ? `<div class="rq-answer-line correct-ans">Your answer: ${userAnswerText} ✔</div>`
          : `<div class="rq-answer-line incorrect-ans">Your answer: ${userAnswerText} ✘</div>
             <div class="rq-answer-line correct-ans">Correct answer: ${correctAnswerText} ✔</div>`
        }
        <div class="rq-explanation">${a.explanation}</div>
      `;
      wrap.appendChild(div);
    });
  }

  function attachFilterEvents() {
    $all(".filter-chip").forEach((chip) => {
      chip.onclick = () => {
        $all(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderReview(chip.getAttribute("data-filter"));
      };
    });
  }

  // ---------------- navigation ----------------
  function goHome() {
    show("screen-home");
  }

  function retakeSameExam() {
    startExam(state.examKey, state.mode);
  }

  function retakeOtherExam() {
    const other = state.examKey === "core1" ? "core2" : "core1";
    startExam(other, state.mode);
  }

  // ---------------- init ----------------
  document.addEventListener("DOMContentLoaded", () => {
    renderHome();
    attachHomeEvents();

    $("#check-btn").addEventListener("click", checkAnswer);
    $("#next-btn").addEventListener("click", nextQuestion);
    $("#finish-btn").addEventListener("click", finishContinuous);
    $("#exit-quiz-btn").addEventListener("click", () => {
      if (confirm("Exit this practice test? Your progress will be lost.")) goHome();
    });
    $("#retake-same-btn").addEventListener("click", retakeSameExam);
    $("#retake-other-btn").addEventListener("click", retakeOtherExam);
    $("#home-btn").addEventListener("click", goHome);

    document.addEventListener("keydown", (e) => {
      if ($("#screen-quiz").hidden) return;
      if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        const choiceEls = $all(".choice");
        if (choiceEls[idx] && !state.answeredCurrent) selectChoice(idx);
      } else if (e.key === "Enter") {
        if (!state.answeredCurrent && state.selectedIndex !== null) checkAnswer();
        else if (state.answeredCurrent) nextQuestion();
      }
    });
  });
})();
