// CompTIA A+ Core 2 (220-1102) practice question bank
// Domains reflect the official exam objectives and weighting.

const CORE2_DOMAINS = {
  "Operating Systems": 31,
  "Security": 25,
  "Software Troubleshooting": 22,
  "Operational Procedures": 22
};

const CORE2_QUESTIONS = [
  // ---------------- Operating Systems ----------------
  {
    id: "c2-os-1",
    domain: "Operating Systems",
    question: "Which command-line tool displays and can help configure IP configuration on a Windows machine?",
    choices: ["ifconfig", "ipconfig", "netstat", "ping"],
    answer: 1,
    explanation: "ipconfig is the Windows command used to view (and with switches, release/renew) the IP configuration of network adapters. The Linux/macOS equivalent is ifconfig or ip."
  },
  {
    id: "c2-os-2",
    domain: "Operating Systems",
    question: "Which file system is used by default on most modern Windows installations?",
    choices: ["FAT32", "NTFS", "ext4", "APFS"],
    answer: 1,
    explanation: "NTFS is the default Windows file system, supporting permissions, encryption, journaling, and larger file/volume sizes than FAT32."
  },
  {
    id: "c2-os-3",
    domain: "Operating Systems",
    question: "Which Windows tool allows a technician to view and manage running processes and resource usage in real time?",
    choices: ["Device Manager", "Task Manager", "Disk Management", "Event Viewer"],
    answer: 1,
    explanation: "Task Manager shows running applications, processes, and real-time CPU/memory/disk/network usage, and allows ending unresponsive tasks."
  },
  {
    id: "c2-os-4",
    domain: "Operating Systems",
    question: "What is the purpose of Safe Mode in Windows?",
    choices: [
      "It increases overall system performance",
      "It starts Windows with a minimal set of drivers and services to help troubleshoot problems",
      "It permanently encrypts the hard drive",
      "It automatically updates the BIOS"
    ],
    answer: 1,
    explanation: "Safe Mode loads Windows with only essential drivers and services, which helps isolate whether a problem is caused by a third-party driver, service, or startup program."
  },
  {
    id: "c2-os-5",
    domain: "Operating Systems",
    question: "Which Windows command checks a disk for file system errors and can attempt to repair them?",
    choices: ["sfc /scannow", "chkdsk", "diskpart", "format"],
    answer: 1,
    explanation: "chkdsk scans a volume for file system errors and bad sectors, and can repair them with the /f or /r switches. sfc /scannow instead checks protected system files."
  },
  {
    id: "c2-os-6",
    domain: "Operating Systems",
    question: "A macOS user wants to view detailed information about their Mac's hardware and installed software. Which utility should they use?",
    choices: ["Disk Utility", "About This Mac / System Information", "Terminal exclusively", "Finder"],
    answer: 1,
    explanation: "'About This Mac' (which links to System Information) provides an overview of hardware specs, storage, and installed software on macOS."
  },
  {
    id: "c2-os-7",
    domain: "Operating Systems",
    question: "Which Linux command lists the contents of the current directory?",
    choices: ["cd", "ls", "pwd", "rm"],
    answer: 1,
    explanation: "The 'ls' command lists directory contents in Linux and macOS. 'cd' changes directories, 'pwd' prints the working directory, and 'rm' removes files."
  },
  {
    id: "c2-os-8",
    domain: "Operating Systems",
    question: "What is the Windows Registry?",
    choices: [
      "A location that stores only installed font files",
      "A hierarchical database that stores low-level OS and application configuration settings",
      "A plaintext file storing user passwords",
      "A tool for managing physical network cables"
    ],
    answer: 1,
    explanation: "The Registry is a hierarchical database used by Windows and installed applications to store configuration settings, options, and system information."
  },
  {
    id: "c2-os-9",
    domain: "Operating Systems",
    question: "Which Windows tool would you use to schedule a script or program to run automatically at a specific time?",
    choices: ["Task Scheduler", "Device Manager", "Control Panel", "Disk Cleanup"],
    answer: 0,
    explanation: "Task Scheduler lets administrators automate tasks by triggering scripts or programs to run on a defined schedule or event."
  },
  {
    id: "c2-os-10",
    domain: "Operating Systems",
    question: "Which command displays a Windows machine's active network connections and listening ports?",
    choices: ["ipconfig", "netstat", "tracert", "nslookup"],
    answer: 1,
    explanation: "netstat displays active TCP/UDP connections and listening ports, which is useful for diagnosing network issues or spotting suspicious connections."
  },
  {
    id: "c2-os-11",
    domain: "Operating Systems",
    question: "Which Windows feature allows multiple people to have separate desktops, files, and settings on the same physical computer?",
    choices: ["User accounts/profiles", "Group Policy", "BitLocker", "System Restore"],
    answer: 0,
    explanation: "Individual user accounts (profiles) allow each person to have their own separate desktop, documents, and settings on a shared computer."
  },
  {
    id: "c2-os-12",
    domain: "Operating Systems",
    question: "A technician needs to reinstall Windows on a PC without deleting the user's existing files. What type of installation should be performed?",
    choices: ["A clean install", "An in-place upgrade / repair install", "A network install to a new drive", "A multiboot install"],
    answer: 1,
    explanation: "An in-place upgrade (repair install) reinstalls Windows over the existing installation while preserving user files, settings, and most applications."
  },

  // ---------------- Security ----------------
  {
    id: "c2-sec-1",
    domain: "Security",
    question: "Which type of malware disguises itself as legitimate software to trick a user into installing it?",
    choices: ["Worm", "Trojan", "Rootkit", "Spyware"],
    answer: 1,
    explanation: "A Trojan horse appears to be a legitimate or useful program, but it actually carries out malicious actions once the user installs and runs it."
  },
  {
    id: "c2-sec-2",
    domain: "Security",
    question: "What is the purpose of two-factor authentication (2FA)?",
    choices: [
      "It encrypts files stored on disk",
      "It adds a second, independent verification step beyond just a password to confirm identity",
      "It speeds up the login process",
      "It automatically backs up user data"
    ],
    answer: 1,
    explanation: "2FA requires a second factor (such as a text code, authenticator app, or hardware token) in addition to a password, making stolen credentials alone insufficient to log in."
  },
  {
    id: "c2-sec-3",
    domain: "Security",
    question: "An attacker sends an email impersonating a bank to trick the recipient into revealing login credentials. What is this technique called?",
    choices: ["Shoulder surfing", "Phishing", "Tailgating", "Dumpster diving"],
    answer: 1,
    explanation: "Phishing uses fraudulent emails (or messages) that impersonate a trusted source to trick victims into revealing sensitive information or clicking malicious links."
  },
  {
    id: "c2-sec-4",
    domain: "Security",
    question: "What does a firewall primarily do?",
    choices: [
      "Scans files for known virus signatures",
      "Filters incoming and outgoing network traffic based on defined rules",
      "Encrypts entire hard drives",
      "Manages user password resets"
    ],
    answer: 1,
    explanation: "A firewall inspects and controls network traffic according to a rule set, blocking or allowing traffic based on criteria like port, protocol, or IP address."
  },
  {
    id: "c2-sec-5",
    domain: "Security",
    question: "Which Windows Pro feature provides full-disk encryption to protect data if a laptop is lost or stolen?",
    choices: ["EFS", "BitLocker", "VPN", "WPA2"],
    answer: 1,
    explanation: "BitLocker is Windows' built-in full-disk encryption feature, protecting the entire drive's contents even if the physical disk is removed and accessed elsewhere."
  },
  {
    id: "c2-sec-6",
    domain: "Security",
    question: "What is 'tailgating' in the context of physical security?",
    choices: [
      "Following an authorized person through a secure door without using your own credentials",
      "Sending large volumes of spam email",
      "Attempting to crack a password offline",
      "Installing malware via a USB drive"
    ],
    answer: 0,
    explanation: "Tailgating (or piggybacking) is a social engineering technique where an unauthorized person follows an authorized person through a secured entry point."
  },
  {
    id: "c2-sec-7",
    domain: "Security",
    question: "Which Wi-Fi security protocol listed below is considered the MOST secure?",
    choices: ["WEP", "WPA", "WPA2/WPA3", "Open (no security)"],
    answer: 2,
    explanation: "WPA2 and its successor WPA3 use much stronger encryption (AES-based) than the older, easily broken WEP and original WPA protocols."
  },
  {
    id: "c2-sec-8",
    domain: "Security",
    question: "What is the principle of least privilege?",
    choices: [
      "Giving every user administrator rights by default",
      "Granting users only the access necessary to perform their specific job duties",
      "Disabling all user accounts until manually approved",
      "Requiring only complex passwords, regardless of access level"
    ],
    answer: 1,
    explanation: "Least privilege means users and processes are granted only the minimum access rights needed to do their jobs, limiting damage if an account is compromised."
  },
  {
    id: "c2-sec-9",
    domain: "Security",
    question: "A user's computer starts showing frequent pop-ups and runs sluggishly shortly after installing a 'free' program from an unknown website. What is the likely cause?",
    choices: ["A failing hard drive", "A malware or adware infection", "A power supply issue", "A network outage"],
    answer: 1,
    explanation: "Pop-ups and sluggish performance appearing right after installing software from an untrusted source are classic symptoms of adware or other malware."
  },
  {
    id: "c2-sec-10",
    domain: "Security",
    question: "What is the primary security purpose of a VPN?",
    choices: [
      "It speeds up the local area network",
      "It creates an encrypted tunnel for data traveling over a public or untrusted network",
      "It automatically removes malware from a device",
      "It manages local user accounts"
    ],
    answer: 1,
    explanation: "A VPN encrypts traffic between the client and a VPN endpoint, protecting data confidentiality as it crosses an untrusted network like the public internet."
  },
  {
    id: "c2-sec-11",
    domain: "Security",
    question: "Which of the following BEST describes 'shredding' as a data destruction method?",
    choices: [
      "Physically destroying documents or drives so the data cannot be recovered",
      "Formatting a drive using the operating system",
      "Encrypting a drive with a strong password",
      "Compressing files into a single archive"
    ],
    answer: 0,
    explanation: "Shredding physically destroys paper or storage media, making data recovery practically impossible, unlike a standard format which can often be reversed."
  },
  {
    id: "c2-sec-12",
    domain: "Security",
    question: "What should a technician do FIRST when they suspect a workstation is infected with malware?",
    choices: [
      "Immediately reformat the drive without investigation",
      "Isolate/quarantine the system from the network",
      "Ignore it unless the user complains again",
      "Install additional unrelated software"
    ],
    answer: 1,
    explanation: "Isolating the infected system from the network first helps prevent the malware from spreading to other devices before remediation begins."
  },

  // ---------------- Software Troubleshooting ----------------
  {
    id: "c2-st-1",
    domain: "Software Troubleshooting",
    question: "An application on a Windows PC freezes frequently. What is a good FIRST troubleshooting step?",
    choices: [
      "Reinstall the entire operating system",
      "Close and restart the application, and check for available updates",
      "Replace the motherboard",
      "Format the hard drive"
    ],
    answer: 1,
    explanation: "Simple steps like restarting the app and checking for updates should be tried before more drastic measures like reinstalling the OS or replacing hardware."
  },
  {
    id: "c2-st-2",
    domain: "Software Troubleshooting",
    question: "A user reports slow performance and unusually high disk usage on Windows. Which tool helps identify the cause?",
    choices: ["Task Manager / Resource Monitor", "Device Manager", "Disk Cleanup only", "Control Panel"],
    answer: 0,
    explanation: "Task Manager and Resource Monitor show which processes are consuming disk, CPU, memory, and network resources in real time, helping pinpoint the cause."
  },
  {
    id: "c2-st-3",
    domain: "Software Troubleshooting",
    question: "A Windows PC displays a 'Blue Screen of Death' (BSOD). What should the technician check?",
    choices: [
      "Monitor brightness settings",
      "Recent driver or hardware changes, and the specific stop code shown",
      "Mouse sensitivity settings",
      "Desktop wallpaper settings"
    ],
    answer: 1,
    explanation: "BSODs often follow a recent driver or hardware change, and the stop code provided can be looked up to identify the specific cause."
  },
  {
    id: "c2-st-4",
    domain: "Software Troubleshooting",
    question: "A PC suspected of malware infection repeatedly shows error messages and won't run programs normally. What is a recommended remediation step?",
    choices: [
      "Ignore the error messages",
      "Boot into Safe Mode and run reputable anti-malware scans to remove threats",
      "Replace the RAM modules",
      "Reinstall only Microsoft Office"
    ],
    answer: 1,
    explanation: "Running anti-malware scans in Safe Mode (where fewer malicious processes load) is a standard step in the malware removal process."
  },
  {
    id: "c2-st-5",
    domain: "Software Troubleshooting",
    question: "An application won't launch and displays a 'missing DLL' error. What is a likely fix?",
    choices: [
      "Reinstall or repair the affected application",
      "Replace the hard drive",
      "Update the monitor's driver",
      "Change the desktop wallpaper"
    ],
    answer: 0,
    explanation: "A missing or corrupted DLL error is usually resolved by repairing or reinstalling the application, which restores its required files."
  },
  {
    id: "c2-st-6",
    domain: "Software Troubleshooting",
    question: "A mobile app crashes frequently on a smartphone. What is a good troubleshooting step to try before more drastic measures?",
    choices: [
      "Perform a factory reset immediately",
      "Update the app and device OS, clear the app cache, and reinstall if needed",
      "Replace the SIM card",
      "Permanently disable Wi-Fi"
    ],
    answer: 1,
    explanation: "Updating the app/OS, clearing cache, and reinstalling are standard low-risk steps that resolve most app crashes without needing a full factory reset."
  },
  {
    id: "c2-st-7",
    domain: "Software Troubleshooting",
    question: "Which Windows utility scans for and attempts to repair corrupted system files?",
    choices: ["sfc /scannow", "diskpart", "msconfig", "regedit"],
    answer: 0,
    explanation: "System File Checker (sfc /scannow) scans protected Windows system files and replaces corrupted ones with cached correct versions."
  },
  {
    id: "c2-st-8",
    domain: "Software Troubleshooting",
    question: "A PC boots to a black screen with only a mouse cursor visible. What should be checked?",
    choices: [
      "Startup programs and display/graphics drivers",
      "Network cable connections",
      "Printer configuration",
      "Sound card settings"
    ],
    answer: 0,
    explanation: "A black screen with a cursor after boot often points to a failed startup process, corrupted display driver, or a hung startup application."
  },
  {
    id: "c2-st-9",
    domain: "Software Troubleshooting",
    question: "Which tool lets a technician control which programs automatically launch when Windows starts?",
    choices: [
      "Task Scheduler",
      "System Configuration (msconfig) or the Task Manager Startup tab",
      "Disk Management",
      "Event Viewer only"
    ],
    answer: 1,
    explanation: "Both msconfig's Startup tab (older Windows) and Task Manager's Startup tab (modern Windows) allow enabling or disabling startup programs."
  },
  {
    id: "c2-st-10",
    domain: "Software Troubleshooting",
    question: "A user's web browser keeps redirecting to unwanted websites. What is the likely cause and remedy?",
    choices: [
      "This is normal behavior and requires no action",
      "A browser hijacker or malicious extension; remove suspicious extensions and run an anti-malware scan",
      "Replace the monitor",
      "Reinstall the printer driver"
    ],
    answer: 1,
    explanation: "Unwanted redirects are a common sign of a browser hijacker or malicious extension, which should be removed along with running a full anti-malware scan."
  },
  {
    id: "c2-st-11",
    domain: "Software Troubleshooting",
    question: "A standard user account needs elevated rights to run an application correctly. What should the technician consider?",
    choices: [
      "Grant elevated/admin rights per company policy, or run the app with elevated permissions as appropriate",
      "Ignore the user's request entirely",
      "Delete the application from the system",
      "Reformat the PC"
    ],
    answer: 0,
    explanation: "Technicians should follow organizational policy to grant the minimum necessary elevated access, rather than ignoring the issue or taking drastic unrelated action."
  },
  {
    id: "c2-st-12",
    domain: "Software Troubleshooting",
    question: "Which Windows log should a technician check to investigate details about an application crash?",
    choices: ["Security log", "Application log in Event Viewer", "System Restore log", "Setup log only"],
    answer: 1,
    explanation: "The Application log in Event Viewer records events and errors generated by installed applications, which is useful for diagnosing crashes."
  },

  // ---------------- Operational Procedures ----------------
  {
    id: "c2-op-1",
    domain: "Operational Procedures",
    question: "What is the correct way to dispose of a used toner cartridge?",
    choices: [
      "Throw it in the regular trash",
      "Follow the manufacturer's Safety Data Sheet (SDS) and local regulations for recycling/disposal",
      "Burn it",
      "Pour any remaining toner down a drain"
    ],
    answer: 1,
    explanation: "Toner and other hazardous materials should be disposed of according to the manufacturer's SDS and applicable local environmental regulations."
  },
  {
    id: "c2-op-2",
    domain: "Operational Procedures",
    question: "Which document provides safety information about handling hazardous materials such as batteries and toner?",
    choices: ["EULA", "SDS (Safety Data Sheet)", "SLA", "NDA"],
    answer: 1,
    explanation: "A Safety Data Sheet (SDS) details the hazards, safe handling, and disposal procedures for a hazardous material or chemical product."
  },
  {
    id: "c2-op-3",
    domain: "Operational Procedures",
    question: "Which practice helps prevent electrostatic discharge (ESD) when working inside a computer case?",
    choices: [
      "Wearing a wool sweater while working",
      "Using an ESD strap and mat, and touching the case to ground yourself before touching components",
      "Working while standing on carpet",
      "Keeping the room humidity at zero percent"
    ],
    answer: 1,
    explanation: "ESD straps and mats safely ground the technician and equipment, preventing static discharge that can damage sensitive electronic components."
  },
  {
    id: "c2-op-4",
    domain: "Operational Procedures",
    question: "What is the purpose of a change management process in an IT environment?",
    choices: [
      "To make undocumented changes as quickly as possible",
      "To document, review, and approve changes before implementation in order to minimize risk",
      "To avoid making any changes to systems ever",
      "To bypass approval steps whenever a change feels urgent"
    ],
    answer: 1,
    explanation: "Change management ensures changes are properly documented, reviewed, tested, and approved, reducing the risk of unexpected outages or issues."
  },
  {
    id: "c2-op-5",
    domain: "Operational Procedures",
    question: "What is the correct safety practice when lifting a heavy piece of equipment?",
    choices: [
      "Bend at the waist and lift using your back",
      "Lift with your legs while keeping your back straight",
      "Twist your torso while lifting the item",
      "Always lift alone regardless of the item's weight"
    ],
    answer: 1,
    explanation: "Proper lifting technique uses the leg muscles with a straight back to avoid back injury; heavy or awkward items should be lifted with help or equipment."
  },
  {
    id: "c2-op-6",
    domain: "Operational Procedures",
    question: "What is the purpose of a knowledge base article in IT support?",
    choices: [
      "To store user passwords",
      "To document known issues and their solutions for reference by technicians and users",
      "To track hardware inventory exclusively",
      "To fully replace the need for staff training"
    ],
    answer: 1,
    explanation: "Knowledge base articles capture solutions to previously encountered issues, helping technicians resolve similar problems faster in the future."
  },
  {
    id: "c2-op-7",
    domain: "Operational Procedures",
    question: "When communicating with an end user during a support call, what is a professional best practice?",
    choices: [
      "Use technical jargon exclusively, regardless of the user's background",
      "Avoid distractions, be culturally sensitive, and avoid sounding condescending",
      "Interrupt the user frequently to save time",
      "Blame the user for causing the issue"
    ],
    answer: 1,
    explanation: "Professional communication skills, such as active listening, avoiding jargon, and remaining respectful, are core parts of effective IT support."
  },
  {
    id: "c2-op-8",
    domain: "Operational Procedures",
    question: "Why is 'chain of custody' important in IT, particularly during incident response?",
    choices: [
      "It tracks how evidence is handled to preserve its integrity for legal or forensic purposes",
      "It manages software license renewals",
      "It schedules routine maintenance windows",
      "It configures automated backup jobs"
    ],
    answer: 0,
    explanation: "Chain of custody documents who handled evidence and when, which is critical to preserving its integrity if the incident leads to legal action."
  },
  {
    id: "c2-op-9",
    domain: "Operational Procedures",
    question: "Which backup strategy follows the rule of keeping 3 copies of data on 2 different media types, with 1 copy stored offsite?",
    choices: ["RAID 5", "The 3-2-1 backup rule", "Incremental backups only", "Full backups only"],
    answer: 1,
    explanation: "The 3-2-1 rule is a widely recommended backup strategy: 3 total copies of data, on 2 different media types, with at least 1 copy stored offsite."
  },
  {
    id: "c2-op-10",
    domain: "Operational Procedures",
    question: "What should a technician do if they discover illegal content on a customer's computer during a repair?",
    choices: [
      "Delete it immediately and say nothing",
      "Follow company policy: stop work, preserve evidence, and notify the appropriate authorities/management",
      "Copy it to a personal USB drive",
      "Ignore it and continue the repair as normal"
    ],
    answer: 1,
    explanation: "Technicians should follow established company policy for handling illegal content, which typically involves preserving evidence and involving management or law enforcement, not deleting or ignoring it."
  },
  {
    id: "c2-op-11",
    domain: "Operational Procedures",
    question: "What is the purpose of a Service Level Agreement (SLA)?",
    choices: [
      "It defines hazardous material handling procedures",
      "It defines expected service response and resolution times between a provider and customer",
      "It defines electrostatic discharge prevention procedures",
      "It defines encryption standards for stored data"
    ],
    answer: 1,
    explanation: "An SLA sets expectations for service quality, such as response times and resolution targets, between a service provider and its customer."
  },
  {
    id: "c2-op-12",
    domain: "Operational Procedures",
    question: "Which UPS (Uninterruptible Power Supply) feature protects equipment during a sudden power outage?",
    choices: [
      "Surge protection only",
      "Battery backup power that allows time for a graceful shutdown during an outage",
      "Built-in firewall protection",
      "Built-in antivirus protection"
    ],
    answer: 1,
    explanation: "A UPS provides temporary battery power during an outage, giving users or systems time to save work and shut down safely, in addition to surge protection."
  }
];
