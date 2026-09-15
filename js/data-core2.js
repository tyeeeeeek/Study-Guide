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
  },

  // ---------------- Operating Systems (set 2) ----------------
  {
    id: "c2-os-13",
    domain: "Operating Systems",
    question: "Which Windows feature allows you to revert system files and settings to an earlier point in time without affecting personal files?",
    choices: ["Disk Cleanup", "System Restore", "BitLocker", "Task Scheduler"],
    answer: 1,
    explanation: "System Restore uses restore points to roll back system files, installed programs, and settings to an earlier state, without touching personal documents."
  },
  {
    id: "c2-os-14",
    domain: "Operating Systems",
    question: "What is the purpose of Windows Update?",
    choices: [
      "It manages user accounts only",
      "It delivers OS patches, security fixes, and feature updates",
      "It backs up personal files only",
      "It manages printer drivers exclusively"
    ],
    answer: 1,
    explanation: "Windows Update delivers security patches, bug fixes, and new features to keep the operating system current and protected against known vulnerabilities."
  },
  {
    id: "c2-os-15",
    domain: "Operating Systems",
    question: "Which command displays a list of currently running processes from the Windows command line?",
    choices: ["tasklist", "dir", "copy", "netstat"],
    answer: 0,
    explanation: "The tasklist command lists all running processes along with details like their process ID (PID), directly from the command line."
  },
  {
    id: "c2-os-16",
    domain: "Operating Systems",
    question: "A technician needs to check which version and build of Windows is installed on a PC. Which command shows this information?",
    choices: ["winver", "diskpart", "format", "chkdsk"],
    answer: 0,
    explanation: "The winver command opens a dialog box showing the installed Windows edition, version, and build number."
  },
  {
    id: "c2-os-17",
    domain: "Operating Systems",
    question: "Which macOS feature lets users quickly switch between multiple full-screen apps and virtual desktops (workspaces)?",
    choices: ["Mission Control / Spaces", "Time Machine", "Keychain Access", "Disk Utility"],
    answer: 0,
    explanation: "Mission Control and Spaces let macOS users organize and switch between multiple virtual desktops and full-screen applications."
  },
  {
    id: "c2-os-18",
    domain: "Operating Systems",
    question: "What is the purpose of a Linux package manager, such as apt or yum?",
    choices: [
      "It manages user permissions only",
      "It installs, updates, and removes software packages and their dependencies",
      "It formats hard drives",
      "It configures network cables"
    ],
    answer: 1,
    explanation: "Package managers like apt (Debian/Ubuntu) and yum (Red Hat/CentOS) automate installing, updating, and removing software along with resolving dependencies."
  },
  {
    id: "c2-os-19",
    domain: "Operating Systems",
    question: "Which Windows utility allows a technician to view detailed logs of system, security, and application events for troubleshooting?",
    choices: ["Event Viewer", "Task Manager", "Control Panel", "File Explorer"],
    answer: 0,
    explanation: "Event Viewer records and displays detailed logs of system, security, and application events, which are essential for diagnosing many types of issues."
  },
  {
    id: "c2-os-20",
    domain: "Operating Systems",
    question: "What is the purpose of the Windows 'Disk Cleanup' utility?",
    choices: [
      "It defragments the hard drive",
      "It removes temporary files and other unnecessary data to free up disk space",
      "It repairs corrupted partitions",
      "It installs new device drivers"
    ],
    answer: 1,
    explanation: "Disk Cleanup scans for and removes temporary files, cached data, and other unneeded files to reclaim disk space."
  },
  {
    id: "c2-os-21",
    domain: "Operating Systems",
    question: "A technician needs to convert a drive's partition style to support drives larger than 2TB with more than 4 partitions. Which partition style should be used?",
    choices: ["MBR", "GPT", "FAT32", "exFAT"],
    answer: 1,
    explanation: "GPT (GUID Partition Table) supports drives larger than 2TB and far more than 4 partitions, unlike the older MBR partitioning scheme."
  },
  {
    id: "c2-os-22",
    domain: "Operating Systems",
    question: "Which built-in Windows feature isolates and virtualizes a lightweight environment to test untrusted software without affecting the host OS?",
    choices: ["Windows Sandbox", "Recycle Bin", "Control Panel", "Quick Access"],
    answer: 0,
    explanation: "Windows Sandbox creates a temporary, isolated desktop environment for safely running untrusted applications, which is discarded when closed."
  },
  {
    id: "c2-os-23",
    domain: "Operating Systems",
    question: "What is the purpose of the Windows 'Services' console (services.msc)?",
    choices: [
      "It manages installed fonts",
      "It allows starting, stopping, and configuring background system and application services",
      "It manages the Recycle Bin",
      "It configures the desktop wallpaper"
    ],
    answer: 1,
    explanation: "services.msc lists all background services on the system and lets a technician start, stop, restart, or change how each one starts up."
  },
  {
    id: "c2-os-24",
    domain: "Operating Systems",
    question: "Which of the following BEST describes the purpose of a device driver?",
    choices: [
      "It is an application for editing documents",
      "It allows the operating system to communicate with and control a specific piece of hardware",
      "It encrypts network traffic",
      "It manages user passwords"
    ],
    answer: 1,
    explanation: "A device driver acts as a translator between the OS and a specific hardware component, allowing the OS to properly control and communicate with it."
  },

  // ---------------- Security (set 2) ----------------
  {
    id: "c2-sec-13",
    domain: "Security",
    question: "Which type of attack involves overwhelming a system with excessive traffic to make it unavailable to legitimate users?",
    choices: ["Phishing", "Denial-of-Service (DoS)", "Shoulder surfing", "Spoofing"],
    answer: 1,
    explanation: "A Denial-of-Service (DoS) attack floods a target with excessive traffic or requests, exhausting its resources and making it unavailable to legitimate users."
  },
  {
    id: "c2-sec-14",
    domain: "Security",
    question: "What is the purpose of an Access Control List (ACL) on a network device?",
    choices: [
      "It automatically encrypts all traffic",
      "It defines rules for which traffic is permitted or denied",
      "It backs up device configuration files",
      "It manages DNS records"
    ],
    answer: 1,
    explanation: "An ACL is a set of rules that permits or denies traffic based on criteria like source/destination address, port, or protocol."
  },
  {
    id: "c2-sec-15",
    domain: "Security",
    question: "A user receives a text message claiming to be from their bank, asking them to click a link and verify account details. What is this an example of?",
    choices: ["Vishing", "Smishing (SMS phishing)", "Tailgating", "Spoofing"],
    answer: 1,
    explanation: "Smishing is phishing conducted via SMS text messages, tricking recipients into clicking malicious links or revealing sensitive information."
  },
  {
    id: "c2-sec-16",
    domain: "Security",
    question: "What is the benefit of using certificate- or security-key-based authentication in addition to a password?",
    choices: [
      "It intentionally slows down the login process",
      "It provides a stronger, much harder-to-steal factor for verifying identity",
      "It replaces the need for antivirus software",
      "It only works on mobile devices"
    ],
    answer: 1,
    explanation: "Certificates and hardware security keys are far more difficult for an attacker to steal or replicate than a password alone, strengthening authentication."
  },
  {
    id: "c2-sec-17",
    domain: "Security",
    question: "Which practice helps protect against 'shoulder surfing' in a public workspace?",
    choices: [
      "Using a privacy screen filter and staying aware of your surroundings",
      "Increasing monitor brightness to the maximum",
      "Sharing your screen publicly",
      "Disabling the screensaver"
    ],
    answer: 0,
    explanation: "A privacy screen filter limits the viewing angle of a display, making it much harder for someone nearby to read sensitive information over your shoulder."
  },
  {
    id: "c2-sec-18",
    domain: "Security",
    question: "What is the purpose of full disk encryption on a mobile device?",
    choices: [
      "It increases battery life",
      "It protects data on the device if it is lost or stolen",
      "It speeds up app loading times",
      "It reduces cellular data usage"
    ],
    answer: 1,
    explanation: "Full disk encryption ensures that data stored on a device remains unreadable to anyone without the correct credentials, even if the device is lost or stolen."
  },
  {
    id: "c2-sec-19",
    domain: "Security",
    question: "Which of the following is a strong password practice?",
    choices: [
      "Reusing the same password across all accounts",
      "Using a long, unique passphrase with a mix of character types, ideally managed by a password manager",
      "Writing passwords on a sticky note at your desk",
      "Using easily guessed personal information like a birthday"
    ],
    answer: 1,
    explanation: "Long, unique passphrases stored in a reputable password manager provide much stronger protection than short, reused, or easily guessable passwords."
  },
  {
    id: "c2-sec-20",
    domain: "Security",
    question: "What does the term 'zero-day vulnerability' refer to?",
    choices: [
      "A vulnerability that has existed for zero days since being patched",
      "A previously unknown vulnerability that has no available patch yet",
      "A vulnerability that only affects outdated, unsupported software",
      "A vulnerability that only affects mobile devices"
    ],
    answer: 1,
    explanation: "A zero-day vulnerability is one that is unknown to the vendor (and thus unpatched) at the time it is discovered or exploited, leaving zero days of prior protection."
  },
  {
    id: "c2-sec-21",
    domain: "Security",
    question: "Which security concept ensures that a user's actions can be traced back to them individually?",
    choices: ["Non-repudiation / accountability", "Availability", "Obfuscation", "Redundancy"],
    answer: 0,
    explanation: "Non-repudiation (tied to accountability) ensures an individual cannot deny having performed an action, typically through logging and unique user credentials."
  },
  {
    id: "c2-sec-22",
    domain: "Security",
    question: "What is the purpose of a guest network on a wireless router?",
    choices: [
      "It gives guests full access to all internal resources",
      "It provides internet access to visitors while isolating them from the main internal network",
      "It increases overall Wi-Fi speed for everyone",
      "It disables all security features on the router"
    ],
    answer: 1,
    explanation: "A guest network lets visitors access the internet while keeping them isolated from internal devices and resources on the primary network."
  },
  {
    id: "c2-sec-23",
    domain: "Security",
    question: "A company implements a policy requiring employees to lock their workstations whenever they step away. This is an example of what type of control?",
    choices: ["A technical control", "An administrative/procedural control", "A physical control", "A detective control only"],
    answer: 1,
    explanation: "A policy dictating employee behavior, such as locking workstations, is an administrative (procedural) control rather than a technical or physical one."
  },
  {
    id: "c2-sec-24",
    domain: "Security",
    question: "What is the purpose of antivirus/anti-malware 'definition updates'?",
    choices: [
      "They update the software's user interface only",
      "They provide the software with information needed to detect newly discovered threats",
      "They increase the system's available RAM",
      "They configure the firewall automatically"
    ],
    answer: 1,
    explanation: "Definition updates give antivirus software the signatures and patterns needed to recognize newly discovered malware, keeping detection current."
  },

  // ---------------- Software Troubleshooting (set 2) ----------------
  {
    id: "c2-st-13",
    domain: "Software Troubleshooting",
    question: "A user cannot access shared network files after a recent password change. What is a likely FIRST step?",
    choices: [
      "Reformat the computer",
      "Re-enter the updated credentials for the network share or mapped drive",
      "Replace the network cable",
      "Reinstall the operating system"
    ],
    answer: 1,
    explanation: "Mapped drives and saved network credentials often need to be updated manually after a password change, which is the simplest and most likely fix."
  },
  {
    id: "c2-st-14",
    domain: "Software Troubleshooting",
    question: "A Windows update fails to install repeatedly. What is a reasonable troubleshooting step?",
    choices: [
      "Ignore updates permanently",
      "Run the Windows Update Troubleshooter and check available disk space",
      "Reinstall the printer driver",
      "Replace the power supply"
    ],
    answer: 1,
    explanation: "The built-in Windows Update Troubleshooter can resolve many common update failures, and insufficient disk space is a frequent, easily checked cause."
  },
  {
    id: "c2-st-15",
    domain: "Software Troubleshooting",
    question: "An application runs slowly and consumes progressively more memory over time, gradually degrading system performance. This behavior suggests what kind of issue?",
    choices: ["A memory leak in the application", "A failing power supply", "A bad network cable", "An outdated monitor driver"],
    answer: 0,
    explanation: "Memory usage that steadily climbs the longer an application runs is a classic symptom of a memory leak within that application."
  },
  {
    id: "c2-st-16",
    domain: "Software Troubleshooting",
    question: "A user's system clock keeps showing the wrong time even after being manually corrected. Besides a failing CMOS battery, what software setting should be checked?",
    choices: [
      "Time zone and 'Set time automatically' / NTP sync settings",
      "Desktop wallpaper settings",
      "Mouse sensitivity settings",
      "The default web browser setting"
    ],
    answer: 0,
    explanation: "Incorrect time zone settings or a failure to sync with an NTP time server can cause the clock to repeatedly show the wrong time, independent of the CMOS battery."
  },
  {
    id: "c2-st-17",
    domain: "Software Troubleshooting",
    question: "After installing a new peripheral, Device Manager shows a yellow exclamation mark next to it. What does this typically indicate?",
    choices: [
      "The device is functioning perfectly",
      "A driver problem or resource conflict affecting that device",
      "The device has been disabled intentionally by the user",
      "The device is drawing too much power"
    ],
    answer: 1,
    explanation: "A yellow exclamation mark in Device Manager generally indicates a driver issue or resource conflict preventing the device from working properly."
  },
  {
    id: "c2-st-18",
    domain: "Software Troubleshooting",
    question: "A user reports their antivirus software is disabled, and they didn't do it themselves. What should the technician suspect?",
    choices: [
      "This is normal Windows behavior",
      "A possible malware infection that disabled the security software",
      "A hardware failure",
      "A monitor issue"
    ],
    answer: 1,
    explanation: "Malware often attempts to disable antivirus and security software to avoid detection, so an unexpectedly disabled antivirus is a red flag for infection."
  },
  {
    id: "c2-st-19",
    domain: "Software Troubleshooting",
    question: "An Office application repeatedly crashes when opening one specific file, but opens fine otherwise. What is a reasonable next step?",
    choices: [
      "Reinstall Windows entirely",
      "Try opening the file in Safe Mode for that app, repair the application, or test the file on another machine",
      "Replace the hard drive",
      "Replace the monitor"
    ],
    answer: 1,
    explanation: "Since only one file triggers the crash, isolating the problem to the file itself (or the app's configuration) with targeted steps is more appropriate than a full OS reinstall."
  },
  {
    id: "c2-st-20",
    domain: "Software Troubleshooting",
    question: "A user's Start Menu and search bar are unresponsive on Windows, though other applications open fine. What is a common fix?",
    choices: ["Restart Windows Explorer via Task Manager", "Replace the RAM", "Format the hard drive", "Reinstall the GPU driver"],
    answer: 0,
    explanation: "Restarting the Windows Explorer process (explorer.exe) via Task Manager often resolves a frozen Start Menu, taskbar, or search bar without a full reboot."
  },
  {
    id: "c2-st-21",
    domain: "Software Troubleshooting",
    question: "A user's PC is stuck in a reboot loop after a failed update. What advanced recovery option might help?",
    choices: [
      "Boot into Advanced Startup/Recovery options and use System Restore or uninstall the update",
      "Immediately reinstall Windows from scratch with no other attempt",
      "Replace the CPU",
      "Remove the RAM permanently"
    ],
    answer: 0,
    explanation: "Windows' Advanced Startup recovery environment allows rolling back a problematic update or restoring to a previous state before resorting to a full reinstall."
  },
  {
    id: "c2-st-22",
    domain: "Software Troubleshooting",
    question: "Which built-in Windows tool helps identify which startup programs and services might be slowing down boot time?",
    choices: [
      "Task Manager's Startup tab, which shows a startup impact rating",
      "Disk Cleanup",
      "File Explorer",
      "Control Panel's Programs list"
    ],
    answer: 0,
    explanation: "Task Manager's Startup tab rates each startup program's impact on boot time, helping identify which ones to disable to speed up startup."
  },
  {
    id: "c2-st-23",
    domain: "Software Troubleshooting",
    question: "A user's mapped network drive shows a red X and is inaccessible. What is a likely cause?",
    choices: [
      "The monitor is disconnected",
      "The network path is unavailable, or the saved credentials have expired",
      "The mouse driver is missing",
      "The GPU is overheating"
    ],
    answer: 1,
    explanation: "A red X on a mapped drive typically means the network path can't currently be reached, often due to a network issue or expired/incorrect saved credentials."
  },
  {
    id: "c2-st-24",
    domain: "Software Troubleshooting",
    question: "An application prompts for administrator elevation every time it opens, even for a routine task. What Windows feature is generating this prompt?",
    choices: ["User Account Control (UAC)", "Windows Defender Firewall", "BitLocker", "System Restore"],
    answer: 0,
    explanation: "User Account Control (UAC) prompts for elevated permissions whenever an application requests administrator-level access, to help prevent unauthorized changes."
  },

  // ---------------- Operational Procedures (set 2) ----------------
  {
    id: "c2-op-13",
    domain: "Operational Procedures",
    question: "What is the purpose of labeling cables and equipment in a data center or wiring closet?",
    choices: [
      "It is purely cosmetic and has no practical function",
      "It helps technicians quickly identify connections, reducing troubleshooting time and errors",
      "It is required only for aesthetic inspections",
      "It has no practical benefit"
    ],
    answer: 1,
    explanation: "Clear labeling lets technicians quickly trace and identify cables and equipment, significantly reducing troubleshooting time and the risk of mistakes."
  },
  {
    id: "c2-op-14",
    domain: "Operational Procedures",
    question: "Which document outlines the steps to follow and who to contact when a major IT incident occurs?",
    choices: ["An SLA", "An incident response plan/procedure", "An EULA", "A warranty card"],
    answer: 1,
    explanation: "An incident response plan defines the specific steps, roles, and contacts to follow when responding to a significant IT incident."
  },
  {
    id: "c2-op-15",
    domain: "Operational Procedures",
    question: "What is the purpose of asset management/inventory tracking in an IT department?",
    choices: [
      "Tracking employee vacation time",
      "Maintaining records of hardware/software assets, their location, and lifecycle for budgeting and security",
      "Managing email accounts only",
      "Configuring firewalls"
    ],
    answer: 1,
    explanation: "Asset management tracks what hardware and software an organization owns, where it is, and its lifecycle status, supporting budgeting, security, and compliance."
  },
  {
    id: "c2-op-16",
    domain: "Operational Procedures",
    question: "When working near a computer's internal components, which environmental factor should generally be minimized to reduce the risk of ESD?",
    choices: [
      "High humidity",
      "Low humidity (very dry air), unless the technician is properly grounded",
      "Ambient room light",
      "Room temperature above 90°F"
    ],
    answer: 1,
    explanation: "Low humidity (dry air) increases the buildup of static electricity, raising the risk of ESD damage unless proper grounding precautions are used."
  },
  {
    id: "c2-op-17",
    domain: "Operational Procedures",
    question: "A technician needs to open a piece of equipment that is still under manufacturer warranty for a repair. What should be checked FIRST?",
    choices: [
      "Nothing — warranties don't matter for repairs",
      "The warranty terms, since unauthorized repairs might void coverage",
      "The equipment's paint color",
      "The technician's personal preference"
    ],
    answer: 1,
    explanation: "Opening warrantied equipment without authorization can void the manufacturer's warranty, so the warranty terms should be checked before proceeding."
  },
  {
    id: "c2-op-18",
    domain: "Operational Procedures",
    question: "What is the purpose of documenting the steps taken during a repair or troubleshooting process?",
    choices: [
      "It's unnecessary once the issue is resolved",
      "It creates a record for future reference, accountability, and knowledge sharing",
      "It only benefits the customer's personal memory",
      "It replaces the need for testing the fix"
    ],
    answer: 1,
    explanation: "Documentation preserves a record of what was done and why, supporting accountability, future troubleshooting, and knowledge sharing among the team."
  },
  {
    id: "c2-op-19",
    domain: "Operational Procedures",
    question: "Which practice is part of proper environmental controls in a server room?",
    choices: [
      "Maintaining appropriate temperature and humidity levels with active monitoring",
      "Keeping the room as hot as possible to save energy",
      "Disabling all air conditioning",
      "Removing all fire suppression systems"
    ],
    answer: 0,
    explanation: "Server rooms require carefully maintained and monitored temperature and humidity levels to prevent equipment damage and failure."
  },
  {
    id: "c2-op-20",
    domain: "Operational Procedures",
    question: "A customer is visibly frustrated during a support call. What is the BEST way for a technician to respond?",
    choices: [
      "Argue back to defend the company",
      "Remain calm, listen actively, and show empathy while working toward a solution",
      "Hang up the call",
      "Transfer the call immediately without addressing their concerns"
    ],
    answer: 1,
    explanation: "Staying calm, listening actively, and showing empathy helps de-escalate a frustrated customer while the technician works toward resolving the actual issue."
  },
  {
    id: "c2-op-21",
    domain: "Operational Procedures",
    question: "What is the purpose of a Safety Data Sheet (SDS) in a workplace?",
    choices: [
      "It tracks employee attendance",
      "It provides safety, handling, and emergency information about hazardous chemicals/materials",
      "It lists software license keys",
      "It tracks customer contact information"
    ],
    answer: 1,
    explanation: "An SDS provides detailed safety, handling, storage, and emergency-response information for a specific hazardous chemical or material."
  },
  {
    id: "c2-op-22",
    domain: "Operational Procedures",
    question: "Which of the following reflects appropriate professional judgment regarding customer data during a repair?",
    choices: [
      "Browse through the customer's personal files out of curiosity",
      "Respect customer privacy and only access data directly relevant to the repair task",
      "Copy interesting files for personal use",
      "Share customer data with coworkers casually"
    ],
    answer: 1,
    explanation: "Technicians should limit their access to only what's necessary for the repair and respect customer privacy at all times, never browsing or sharing unrelated data."
  },
  {
    id: "c2-op-23",
    domain: "Operational Procedures",
    question: "What is the purpose of a maintenance window in IT operations?",
    choices: [
      "A physical window located in the server room",
      "A scheduled time period for performing updates/maintenance with minimal impact on users",
      "A type of firewall rule",
      "A monitor display setting"
    ],
    answer: 1,
    explanation: "A maintenance window is a pre-approved, scheduled time period (often during off-peak hours) for performing updates or changes with minimal disruption to users."
  },
  {
    id: "c2-op-24",
    domain: "Operational Procedures",
    question: "Why is it important to avoid making unauthorized changes to a production system without following change management?",
    choices: [
      "Unauthorized changes are always faster and preferred",
      "They can cause unexpected outages and security risks, and are harder to troubleshoot or roll back",
      "Change management is only a formality with no real purpose",
      "It's fine as long as no one notices"
    ],
    answer: 1,
    explanation: "Skipping change management increases the risk of unexpected outages and security issues, and makes problems much harder to trace back and roll back safely."
  }
];
