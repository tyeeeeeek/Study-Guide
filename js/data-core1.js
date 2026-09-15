// CompTIA A+ Core 1 (220-1101) practice question bank
// Domains reflect the official exam objectives and weighting.

const CORE1_DOMAINS = {
  "Mobile Devices": 15,
  "Networking": 20,
  "Hardware": 25,
  "Virtualization and Cloud Computing": 11,
  "Hardware and Network Troubleshooting": 29
};

const CORE1_QUESTIONS = [
  // ---------------- Mobile Devices ----------------
  {
    id: "c1-md-1",
    domain: "Mobile Devices",
    question: "Which connector type is standard for charging and data transfer on most current-generation Android smartphones?",
    choices: ["Lightning", "USB-C", "Micro-USB", "Thunderbolt 2"],
    answer: 1,
    explanation: "USB-C is the standard reversible connector used by nearly all modern Android devices for charging and data transfer, replacing the older Micro-USB standard."
  },
  {
    id: "c1-md-2",
    domain: "Mobile Devices",
    question: "A technician needs to replace a laptop's cracked screen. What should be done FIRST for safety?",
    choices: ["Order the replacement panel", "Disconnect the battery", "Remove the keyboard", "Flash the BIOS"],
    answer: 1,
    explanation: "Before opening a laptop for any internal repair, disconnect the battery (or power source) first to prevent electrical shock or short circuits while working near components."
  },
  {
    id: "c1-md-3",
    domain: "Mobile Devices",
    question: "Which technology allows a smartphone to make a contactless payment by tapping it near a terminal?",
    choices: ["Bluetooth", "NFC", "Infrared (IR)", "GPS"],
    answer: 1,
    explanation: "Near Field Communication (NFC) enables short-range wireless data exchange, commonly used for contactless payments like Apple Pay and Google Pay."
  },
  {
    id: "c1-md-4",
    domain: "Mobile Devices",
    question: "Which laptop port is commonly used to output video to an external monitor via DisplayPort Alt Mode while also supporting data and charging?",
    choices: ["VGA", "USB-C", "PS/2", "RJ-11"],
    answer: 1,
    explanation: "USB-C supports multiple alternate modes, including DisplayPort Alt Mode, allowing a single port to handle video output, data transfer, and charging."
  },
  {
    id: "c1-md-5",
    domain: "Mobile Devices",
    question: "A company wants corporate email, contacts, and calendar to sync to employee phones with the ability to remotely wipe the device if lost. What should be configured?",
    choices: ["POP3", "Exchange ActiveSync / MDM profile", "SMTP relay", "A dedicated FTP server"],
    answer: 1,
    explanation: "Exchange ActiveSync (often paired with a Mobile Device Management solution) provides mail/contact/calendar sync along with remote wipe and security policy enforcement."
  },
  {
    id: "c1-md-6",
    domain: "Mobile Devices",
    question: "What is the function of a smartphone's digitizer?",
    choices: [
      "Provides Wi-Fi connectivity",
      "Converts touch input on the screen into signals the OS can interpret",
      "Regulates battery charging speed",
      "Renders the image shown on the display"
    ],
    answer: 1,
    explanation: "The digitizer is the layer on a touchscreen that senses touch input and converts it into coordinates the operating system can use, separate from the display panel itself."
  },
  {
    id: "c1-md-7",
    domain: "Mobile Devices",
    question: "A technician notices a laptop battery is swollen. What is the correct course of action?",
    choices: [
      "Charge it fully to restore capacity",
      "Handle it carefully, stop using it, and dispose of it per hazardous material guidelines",
      "Puncture it to relieve pressure",
      "Store it in a freezer to reduce swelling"
    ],
    answer: 1,
    explanation: "Swollen lithium-ion batteries are a fire/chemical hazard. They should not be charged, punctured, or subjected to temperature extremes; they must be handled carefully and disposed of following proper hazmat procedures."
  },
  {
    id: "c1-md-8",
    domain: "Mobile Devices",
    question: "Which wireless technology is typically used to pair a smartwatch with a smartphone for low-power, continuous data sync?",
    choices: ["NFC", "Bluetooth", "Cellular data", "Satellite"],
    answer: 1,
    explanation: "Bluetooth is the standard low-power, short-range wireless technology used to pair wearables like smartwatches with smartphones."
  },
  {
    id: "c1-md-9",
    domain: "Mobile Devices",
    question: "A company enables remote lock, remote wipe, and app whitelisting on all corporate phones. This is an example of what?",
    choices: ["VPN configuration", "Mobile Device Management (MDM)", "A firmware update", "Biometric authentication"],
    answer: 1,
    explanation: "Mobile Device Management (MDM) platforms let organizations enforce security policies, remotely lock or wipe devices, and control which apps can be installed."
  },
  {
    id: "c1-md-10",
    domain: "Mobile Devices",
    question: "Which of the following is a common wireless charging standard supported by many smartphones?",
    choices: ["USB Power Delivery (PD)", "Qi", "NFC", "Thunderbolt"],
    answer: 1,
    explanation: "Qi is the widely adopted wireless charging standard that uses electromagnetic induction between a charging pad and the device."
  },

  // ---------------- Networking ----------------
  {
    id: "c1-net-1",
    domain: "Networking",
    question: "Which cable type transmits data using light and is immune to electromagnetic interference (EMI)?",
    choices: ["Coaxial", "Fiber optic", "CAT5e (copper)", "Shielded twisted pair (STP)"],
    answer: 1,
    explanation: "Fiber optic cable transmits data as pulses of light through glass or plastic strands, making it immune to EMI and suitable for long-distance, high-bandwidth links."
  },
  {
    id: "c1-net-2",
    domain: "Networking",
    question: "Which port does HTTPS use by default?",
    choices: ["80", "443", "21", "25"],
    answer: 1,
    explanation: "HTTPS (secure HTTP over TLS/SSL) uses TCP port 443 by default, while unencrypted HTTP uses port 80."
  },
  {
    id: "c1-net-3",
    domain: "Networking",
    question: "Which network device operates at Layer 2 and forwards frames based on MAC addresses?",
    choices: ["Router", "Switch", "Hub", "Repeater"],
    answer: 1,
    explanation: "A switch operates at the Data Link layer (Layer 2), using MAC address tables to forward frames only to the port where the destination device resides."
  },
  {
    id: "c1-net-4",
    domain: "Networking",
    question: "A technician wants to logically separate departments on the same physical switch without adding new hardware. What should be configured?",
    choices: ["A VPN", "A VLAN", "NAT", "A DMZ"],
    answer: 1,
    explanation: "A Virtual LAN (VLAN) logically segments a physical network into separate broadcast domains without requiring additional physical switches."
  },
  {
    id: "c1-net-5",
    domain: "Networking",
    question: "Which protocol automatically assigns IP addresses and other network settings to devices on a network?",
    choices: ["DNS", "DHCP", "FTP", "SNMP"],
    answer: 1,
    explanation: "Dynamic Host Configuration Protocol (DHCP) automatically leases IP addresses, subnet masks, gateways, and DNS servers to clients on a network."
  },
  {
    id: "c1-net-6",
    domain: "Networking",
    question: "What is the purpose of a subnet mask?",
    choices: [
      "It encrypts traffic on the network",
      "It identifies which portion of an IP address is the network ID vs. the host ID",
      "It assigns MAC addresses to devices",
      "It filters spam email"
    ],
    answer: 1,
    explanation: "A subnet mask defines the boundary between the network and host portions of an IP address, which determines the size of a subnet."
  },
  {
    id: "c1-net-7",
    domain: "Networking",
    question: "Which wireless standard operates primarily in the 5GHz band and offers higher throughput than 802.11n?",
    choices: ["802.11a", "802.11ac", "802.11b", "802.11g"],
    answer: 1,
    explanation: "802.11ac operates in the 5GHz band and uses wider channels and MIMO to achieve significantly higher throughput than earlier standards like 802.11n."
  },
  {
    id: "c1-net-8",
    domain: "Networking",
    question: "A company wants employees to securely access internal network resources from home over the public internet. What should be implemented?",
    choices: ["A VLAN", "A VPN", "NAT", "QoS"],
    answer: 1,
    explanation: "A Virtual Private Network (VPN) creates an encrypted tunnel over a public network, allowing remote users to securely access internal resources."
  },
  {
    id: "c1-net-9",
    domain: "Networking",
    question: "Which service translates human-readable domain names into IP addresses?",
    choices: ["DHCP", "DNS", "FTP", "ARP"],
    answer: 1,
    explanation: "The Domain Name System (DNS) resolves domain names, such as example.com, into the IP addresses computers use to communicate."
  },
  {
    id: "c1-net-10",
    domain: "Networking",
    question: "Which device connects multiple different networks together and determines the best path for data using IP addresses?",
    choices: ["Switch", "Router", "Hub", "Bridge"],
    answer: 1,
    explanation: "A router operates at Layer 3 and forwards packets between different networks, selecting the best path based on IP addressing and routing tables."
  },

  // ---------------- Hardware ----------------
  {
    id: "c1-hw-1",
    domain: "Hardware",
    question: "How many pins does a standard SATA data cable connector have?",
    choices: ["7", "15", "24", "40"],
    answer: 0,
    explanation: "A SATA data connector has 7 pins, while the separate SATA power connector has 15 pins."
  },
  {
    id: "c1-hw-2",
    domain: "Hardware",
    question: "Which component converts AC power from a wall outlet into the DC power used by internal computer components?",
    choices: ["Motherboard", "Power supply unit (PSU)", "CPU", "GPU"],
    answer: 1,
    explanation: "The power supply unit (PSU) converts incoming AC power into the various DC voltages required by the motherboard, drives, and other components."
  },
  {
    id: "c1-hw-3",
    domain: "Hardware",
    question: "What is the purpose of thermal paste when installing a CPU cooler?",
    choices: [
      "It insulates electrical current between components",
      "It improves heat transfer between the CPU and the heatsink",
      "It prevents dust buildup inside the case",
      "It increases the CPU's clock speed"
    ],
    answer: 1,
    explanation: "Thermal paste fills microscopic gaps between the CPU's surface and the heatsink, improving heat conduction and preventing overheating."
  },
  {
    id: "c1-hw-4",
    domain: "Hardware",
    question: "Which motherboard form factor is smaller than standard ATX and commonly used in compact desktop builds?",
    choices: ["ATX", "Micro-ATX", "E-ATX", "Full tower"],
    answer: 1,
    explanation: "Micro-ATX is a smaller variant of the ATX form factor, offering fewer expansion slots but fitting in more compact cases."
  },
  {
    id: "c1-hw-5",
    domain: "Hardware",
    question: "A technician is installing two RAM modules and wants to enable dual-channel mode. What must be true?",
    choices: [
      "The modules must be installed in the correct matching slots per the motherboard manual",
      "Only one module can ever be installed",
      "The two modules must run at different speeds",
      "RAM must be installed directly into the CPU socket"
    ],
    answer: 0,
    explanation: "Dual-channel mode requires matched (or compatible) RAM modules installed in the correct paired slots, as specified in the motherboard's documentation."
  },
  {
    id: "c1-hw-6",
    domain: "Hardware",
    question: "Which printer type uses a laser and toner cartridge, fusing the image onto paper with heat?",
    choices: ["Inkjet", "Laser", "Thermal", "Impact"],
    answer: 1,
    explanation: "Laser printers use a laser to charge a drum, which attracts toner that is then fused onto paper using heat and pressure."
  },
  {
    id: "c1-hw-7",
    domain: "Hardware",
    question: "What is the function of the CMOS battery on a motherboard?",
    choices: [
      "It powers the CPU during normal operation",
      "It retains BIOS/UEFI settings and the system clock when the system is powered off",
      "It powers the GPU during 3D rendering",
      "It cools the chipset"
    ],
    answer: 1,
    explanation: "The small CMOS battery keeps BIOS/UEFI configuration data and the real-time clock running even when the system is unplugged."
  },
  {
    id: "c1-hw-8",
    domain: "Hardware",
    question: "Which connector type supports high-bandwidth external storage and can also carry video signals?",
    choices: ["eSATA", "Thunderbolt", "PS/2", "RJ-45"],
    answer: 1,
    explanation: "Thunderbolt combines PCIe and DisplayPort signals over one connector (often USB-C), enabling very high-speed storage as well as video output."
  },
  {
    id: "c1-hw-9",
    domain: "Hardware",
    question: "A computer fails to POST and emits a repeating series of beeps. What should the technician consult to diagnose the issue?",
    choices: ["Windows Event Viewer", "The motherboard/BIOS manufacturer's beep code documentation", "Device Manager", "Task Manager"],
    answer: 1,
    explanation: "Beep codes are generated by the BIOS/UEFI firmware before the OS loads, so they must be looked up in the motherboard or BIOS manufacturer's documentation."
  },
  {
    id: "c1-hw-10",
    domain: "Hardware",
    question: "Which RAID level requires at least two drives and duplicates data across them for redundancy?",
    choices: ["RAID 0", "RAID 1", "RAID 5", "RAID 10 only with 8 drives"],
    answer: 1,
    explanation: "RAID 1 mirrors data identically across two (or more) drives, providing redundancy in case one drive fails, at the cost of usable capacity."
  },

  // ---------------- Virtualization and Cloud Computing ----------------
  {
    id: "c1-vc-1",
    domain: "Virtualization and Cloud Computing",
    question: "Which term describes software that allows multiple virtual machines to run on a single physical host?",
    choices: ["Container engine", "Hypervisor", "Firmware", "Kernel module"],
    answer: 1,
    explanation: "A hypervisor manages and allocates physical hardware resources among multiple virtual machines running on the same host."
  },
  {
    id: "c1-vc-2",
    domain: "Virtualization and Cloud Computing",
    question: "What differentiates a Type 1 hypervisor from a Type 2 hypervisor?",
    choices: [
      "Type 1 runs directly on bare metal hardware; Type 2 runs on top of a host operating system",
      "Type 1 is always free; Type 2 always costs money",
      "Type 2 hypervisors are always faster than Type 1",
      "There is no meaningful difference"
    ],
    answer: 0,
    explanation: "Type 1 (bare-metal) hypervisors install directly on hardware for better performance, while Type 2 (hosted) hypervisors run as an application on an existing OS."
  },
  {
    id: "c1-vc-3",
    domain: "Virtualization and Cloud Computing",
    question: "Which cloud service model provides virtualized hardware resources (VMs, storage, networking) while the customer manages the OS and applications?",
    choices: ["SaaS", "PaaS", "IaaS", "DaaS"],
    answer: 2,
    explanation: "Infrastructure as a Service (IaaS) provides raw virtualized compute, storage, and networking resources, with the customer responsible for the OS and up."
  },
  {
    id: "c1-vc-4",
    domain: "Virtualization and Cloud Computing",
    question: "A company uses a browser-based email service that is fully hosted and maintained by a third party. This is an example of which cloud model?",
    choices: ["IaaS", "PaaS", "SaaS", "On-premises hosting"],
    answer: 2,
    explanation: "Software as a Service (SaaS) delivers a complete, ready-to-use application over the internet, with the provider managing all underlying infrastructure."
  },
  {
    id: "c1-vc-5",
    domain: "Virtualization and Cloud Computing",
    question: "What is a key benefit of using virtual machines for software testing?",
    choices: [
      "It eliminates the need for any backups",
      "It allows isolated, easily disposable test environments",
      "It increases the amount of physical hardware needed",
      "It removes all software licensing requirements"
    ],
    answer: 1,
    explanation: "VMs can be created, snapshotted, and destroyed quickly, giving testers isolated environments that don't risk affecting production systems."
  },
  {
    id: "c1-vc-6",
    domain: "Virtualization and Cloud Computing",
    question: "Which term refers to a cloud environment's ability to automatically adjust resources based on current demand?",
    choices: ["Virtualization", "Elasticity / scalability", "Sandboxing", "Replication"],
    answer: 1,
    explanation: "Elasticity (or scalability) describes a cloud system's ability to grow or shrink allocated resources dynamically to match workload demand."
  },
  {
    id: "c1-vc-7",
    domain: "Virtualization and Cloud Computing",
    question: "What is a VM snapshot primarily used for?",
    choices: [
      "Permanently deleting a virtual machine",
      "Capturing the state of a VM at a point in time so it can be restored later",
      "Increasing the VM's allocated CPU cores",
      "Migrating the VM to physical hardware"
    ],
    answer: 1,
    explanation: "A snapshot preserves a VM's disk and memory state at a specific moment, allowing a technician to roll back changes if something goes wrong."
  },
  {
    id: "c1-vc-8",
    domain: "Virtualization and Cloud Computing",
    question: "Which cloud deployment model is dedicated to a single organization, whether hosted on-site or by a third party?",
    choices: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
    answer: 1,
    explanation: "A private cloud is provisioned for exclusive use by one organization, offering more control than public cloud offerings."
  },
  {
    id: "c1-vc-9",
    domain: "Virtualization and Cloud Computing",
    question: "Before creating additional virtual machines on a host, what should a technician verify?",
    choices: ["Monitor resolution", "Available CPU, RAM, and storage resources on the host", "Keyboard layout", "Number of free USB ports"],
    answer: 1,
    explanation: "Each VM consumes a share of the host's CPU, memory, and storage, so available resource capacity must be confirmed before provisioning more VMs."
  },
  {
    id: "c1-vc-10",
    domain: "Virtualization and Cloud Computing",
    question: "Which term describes a cloud model that combines private and public cloud resources?",
    choices: ["Community cloud", "Hybrid cloud", "Multi-tenant cloud", "Elastic cloud"],
    answer: 1,
    explanation: "A hybrid cloud combines private and public cloud infrastructure, allowing data and applications to move between them as needed."
  },

  // ---------------- Hardware and Network Troubleshooting ----------------
  {
    id: "c1-tr-1",
    domain: "Hardware and Network Troubleshooting",
    question: "A desktop randomly reboots only during heavy workloads like gaming or rendering. What should the technician check FIRST?",
    choices: ["The monitor cable", "CPU temperatures and cooling", "Keyboard drivers", "Web browser settings"],
    answer: 1,
    explanation: "Random reboots under load are a classic symptom of overheating; checking CPU temperatures and cooling (fans, thermal paste, dust) is the logical first step."
  },
  {
    id: "c1-tr-2",
    domain: "Hardware and Network Troubleshooting",
    question: "A laser printer is producing consistently faded prints. What is the MOST likely cause?",
    choices: ["Low toner", "A bad network cable", "A corrupted OS installation", "Incorrect paper size selected"],
    answer: 0,
    explanation: "Faded or streaky output on a laser printer is most commonly caused by low or unevenly distributed toner in the cartridge."
  },
  {
    id: "c1-tr-3",
    domain: "Hardware and Network Troubleshooting",
    question: "A technician suspects a network cable is causing intermittent connectivity. Which tool should be used to test it?",
    choices: ["A multimeter", "A cable tester", "A loopback plug", "A toner probe"],
    answer: 1,
    explanation: "A cable tester checks for continuity, shorts, and correct wiring pin-out on network cables, which is exactly what's needed to diagnose a suspect cable."
  },
  {
    id: "c1-tr-4",
    domain: "Hardware and Network Troubleshooting",
    question: "A hard drive makes a repeated clicking noise and the computer fails to boot. What is the MOST likely issue?",
    choices: ["A corrupted OS installation", "A failing or failed hard drive", "A loose keyboard cable", "An outdated BIOS"],
    answer: 1,
    explanation: "Repeated clicking noises from a mechanical hard drive typically indicate the read/write head is failing, a strong sign of imminent or actual drive failure."
  },
  {
    id: "c1-tr-5",
    domain: "Hardware and Network Troubleshooting",
    question: "A monitor shows no image, but the computer's power light and fans turn on. What should be checked FIRST?",
    choices: ["Reinstall the operating system", "Video cable connections and power to the monitor", "Replace the CPU", "Format the hard drive"],
    answer: 1,
    explanation: "Basic connections should always be checked first — a loose or damaged video cable, or the monitor's own power source, is the most common cause of a 'no signal' display."
  },
  {
    id: "c1-tr-6",
    domain: "Hardware and Network Troubleshooting",
    question: "Which tool would a technician use to locate a specific cable within a bundle in a wiring closet?",
    choices: ["A cable tester", "A tone generator and probe (toner probe)", "A loopback plug", "A crimper"],
    answer: 1,
    explanation: "A toner probe sends an audible tone down a cable that a technician can trace with the probe, useful for identifying one cable among many unlabeled ones."
  },
  {
    id: "c1-tr-7",
    domain: "Hardware and Network Troubleshooting",
    question: "A laptop will not power on, even while plugged into a working outlet. What should be checked FIRST?",
    choices: ["Reinstall the operating system", "The AC adapter, power cable, and battery", "Replace the motherboard", "Update all device drivers"],
    answer: 1,
    explanation: "Power issues should always start with the simplest checks: verifying the AC adapter, cable, outlet, and battery before assuming a hardware failure inside the laptop."
  },
  {
    id: "c1-tr-8",
    domain: "Hardware and Network Troubleshooting",
    question: "Users in one specific area of an office report intermittent Wi-Fi drops. What is a likely cause?",
    choices: ["An incorrect DNS server setting", "Wireless interference or a weak signal in that area", "Bad RAM in the affected laptops", "An expired antivirus license"],
    answer: 1,
    explanation: "Connectivity issues isolated to a physical area often point to RF interference, distance from the access point, or physical obstructions weakening the wireless signal there."
  },
  {
    id: "c1-tr-9",
    domain: "Hardware and Network Troubleshooting",
    question: "A computer displays 'No Boot Device Found' when powered on. What should the technician verify FIRST?",
    choices: ["Boot order and drive connections in BIOS/UEFI", "Reinstall antivirus software", "Replace the power supply", "Update the GPU driver"],
    answer: 0,
    explanation: "This error usually means the system can't find a bootable drive — checking the boot order and physical drive/cable connections in BIOS/UEFI is the correct first step."
  },
  {
    id: "c1-tr-10",
    domain: "Hardware and Network Troubleshooting",
    question: "A technician notices a burning smell coming from a computer's power supply. What is the appropriate FIRST action?",
    choices: [
      "Keep using it since the PC still boots",
      "Power off and unplug the system immediately, then replace the PSU",
      "Open the PSU casing to inspect it while powered on",
      "Ignore it unless smoke appears"
    ],
    answer: 1,
    explanation: "A burning smell is a fire and safety hazard. The system should be powered off and unplugged immediately, and the PSU should be replaced rather than repaired."
  },

  // ---------------- Mobile Devices (set 2) ----------------
  {
    id: "c1-md-11",
    domain: "Mobile Devices",
    question: "Which port is commonly used for wired Ethernet networking on a laptop docking station?",
    choices: ["RJ-11", "RJ-45", "USB-A", "3.5mm audio jack"],
    answer: 1,
    explanation: "RJ-45 is the standard connector for wired Ethernet networking, commonly built into docking stations to give laptops a wired network option."
  },
  {
    id: "c1-md-12",
    domain: "Mobile Devices",
    question: "A company wants to prevent unauthorized apps from being installed on corporate-owned smartphones. What should be configured?",
    choices: ["Screen lock only", "App store restrictions enforced via an MDM policy", "Airplane mode", "Bluetooth pairing"],
    answer: 1,
    explanation: "MDM platforms can restrict which apps or app stores are allowed on a managed device, preventing installation of unauthorized software."
  },
  {
    id: "c1-md-13",
    domain: "Mobile Devices",
    question: "Which laptop display technology is known for wide viewing angles and accurate color reproduction compared to older TN panels?",
    choices: ["IPS", "CRT", "Plasma", "VFD"],
    answer: 0,
    explanation: "IPS (In-Plane Switching) panels offer better color accuracy and much wider viewing angles than older TN (Twisted Nematic) panels."
  },
  {
    id: "c1-md-14",
    domain: "Mobile Devices",
    question: "A tablet's touchscreen is unresponsive in one corner, but the display still shows images correctly. Which component most likely needs replacement?",
    choices: ["Battery", "Digitizer", "Speaker", "SIM card"],
    answer: 1,
    explanation: "Since the display still shows images correctly but touch input fails, the digitizer (the touch-sensing layer) is the most likely faulty component."
  },
  {
    id: "c1-md-15",
    domain: "Mobile Devices",
    question: "What is the purpose of location/geotracking services on a mobile device?",
    choices: [
      "It increases battery life",
      "It determines the device's physical location for apps like maps and Find My Device",
      "It encrypts data stored on the device",
      "It improves Wi-Fi signal strength"
    ],
    answer: 1,
    explanation: "Location services use GPS and other signals to determine a device's physical position, enabling features like navigation and remote device location."
  },
  {
    id: "c1-md-16",
    domain: "Mobile Devices",
    question: "Which accessory allows a laptop to connect to multiple external monitors, wired Ethernet, and USB devices through a single cable?",
    choices: ["A KVM switch", "A docking station", "A cellular modem", "A Bluetooth dongle"],
    answer: 1,
    explanation: "A docking station consolidates multiple peripheral and display connections into a single cable connection to the laptop."
  },
  {
    id: "c1-md-17",
    domain: "Mobile Devices",
    question: "A technician is replacing a laptop's SODIMM memory module. What does SODIMM refer to?",
    choices: [
      "A type of hard drive",
      "A small outline dual in-line memory module, used in laptops and small-form-factor devices",
      "A CPU socket type",
      "A wireless networking standard"
    ],
    answer: 1,
    explanation: "SODIMM stands for Small Outline Dual In-line Memory Module, the compact RAM form factor used in laptops, unlike the larger DIMMs used in desktops."
  },
  {
    id: "c1-md-18",
    domain: "Mobile Devices",
    question: "Which setting helps prevent a mobile device from automatically connecting to unknown or potentially rogue Wi-Fi networks?",
    choices: [
      "Auto-join enabled only for previously trusted/known networks",
      "Auto-join enabled for any open network",
      "Airplane mode permanently on",
      "Bluetooth discoverability enabled"
    ],
    answer: 0,
    explanation: "Restricting auto-join to known, trusted networks prevents a device from silently connecting to open or malicious networks that mimic legitimate ones."
  },
  {
    id: "c1-md-19",
    domain: "Mobile Devices",
    question: "How does Mobile Application Management (MAM) differ from full Mobile Device Management (MDM)?",
    choices: [
      "MAM manages the entire device, including personal apps and settings",
      "MAM manages and secures only specific corporate applications and their data on a device",
      "MAM completely replaces the device's operating system",
      "MAM blocks all cellular data on the device"
    ],
    answer: 1,
    explanation: "MAM focuses narrowly on managing and securing corporate applications and their data, without taking control of the entire device the way full MDM does."
  },
  {
    id: "c1-md-20",
    domain: "Mobile Devices",
    question: "A user's phone battery is draining unusually fast. What is a reasonable FIRST troubleshooting step?",
    choices: [
      "Replace the phone immediately",
      "Check battery usage statistics to identify which apps are consuming excess power",
      "Perform a factory reset without any investigation",
      "Remove the SIM card"
    ],
    answer: 1,
    explanation: "Reviewing battery usage statistics first helps identify a specific misbehaving app or setting before resorting to drastic measures like a factory reset or replacement."
  },

  // ---------------- Networking (set 2) ----------------
  {
    id: "c1-net-11",
    domain: "Networking",
    question: "Which protocol securely transfers files over an encrypted connection, serving as a secure alternative to standard FTP?",
    choices: ["TFTP", "SFTP", "SNMP", "SMTP"],
    answer: 1,
    explanation: "SFTP (SSH File Transfer Protocol) encrypts file transfers over an SSH connection, unlike standard FTP which sends data in cleartext."
  },
  {
    id: "c1-net-12",
    domain: "Networking",
    question: "What is the purpose of a port forwarding rule on a firewall or router?",
    choices: [
      "It blocks all inbound traffic to the network",
      "It directs incoming traffic on a specific port to a specific internal device",
      "It encrypts all outbound traffic automatically",
      "It assigns IP addresses to devices"
    ],
    answer: 1,
    explanation: "Port forwarding maps a specific external port to an internal device's IP address and port, allowing external traffic to reach an internal service."
  },
  {
    id: "c1-net-13",
    domain: "Networking",
    question: "Which IPv4 address range is reserved for private, non-routable networks, such as 192.168.x.x?",
    choices: ["Public addressing", "Private addressing (RFC 1918)", "Multicast addressing", "Loopback addressing"],
    answer: 1,
    explanation: "RFC 1918 reserves specific address ranges (including 192.168.0.0/16, 10.0.0.0/8, and 172.16.0.0/12) for private networks that are not routed on the public internet."
  },
  {
    id: "c1-net-14",
    domain: "Networking",
    question: "A technician needs to test whether a remote host is reachable and measure round-trip response time. Which command should be used?",
    choices: ["ping", "ipconfig", "netstat", "nslookup"],
    answer: 0,
    explanation: "The ping command sends ICMP echo requests to a host and reports whether it responds along with round-trip time, making it the standard basic connectivity test."
  },
  {
    id: "c1-net-15",
    domain: "Networking",
    question: "In a star network topology, what role does the central device (such as a switch) play?",
    choices: [
      "It is the single point all other devices connect to and communicate through",
      "It only connects to one other device in a chain",
      "It terminates the bus at each end",
      "It repeats signals around a closed ring"
    ],
    answer: 0,
    explanation: "In a star topology, every device connects individually to a central point (typically a switch), which all traffic passes through."
  },
  {
    id: "c1-net-16",
    domain: "Networking",
    question: "What does the acronym SSID refer to in wireless networking?",
    choices: [
      "A type of wireless encryption",
      "The network name broadcast by a wireless access point to identify the network",
      "A device's MAC address",
      "A firewall rule"
    ],
    answer: 1,
    explanation: "The SSID (Service Set Identifier) is the human-readable name of a wireless network, which is what users select when connecting to Wi-Fi."
  },
  {
    id: "c1-net-17",
    domain: "Networking",
    question: "Which tool would a technician use to determine the path (hops) that packets take to reach a destination?",
    choices: ["ping", "tracert / traceroute", "ipconfig", "netstat"],
    answer: 1,
    explanation: "tracert (Windows) or traceroute (Linux/macOS) shows each hop a packet passes through on its way to a destination, useful for diagnosing routing issues."
  },
  {
    id: "c1-net-18",
    domain: "Networking",
    question: "A device combines multiple internet connections to provide load balancing and failover for a network. What class of device is this?",
    choices: ["A standard switch", "A load-balancing/multi-WAN router", "A hub", "A repeater"],
    answer: 1,
    explanation: "A multi-WAN router or dedicated load balancer can combine multiple internet connections, distributing traffic across them and failing over if one connection drops."
  },
  {
    id: "c1-net-19",
    domain: "Networking",
    question: "Which port is used by default for unencrypted SMTP email transmission between mail servers?",
    choices: ["25", "110", "143", "443"],
    answer: 0,
    explanation: "Port 25 is the traditional default port for SMTP (Simple Mail Transfer Protocol), used for sending email between mail servers."
  },
  {
    id: "c1-net-20",
    domain: "Networking",
    question: "What is the main advantage of using a mesh Wi-Fi system over a single wireless router in a large home?",
    choices: [
      "It is always less expensive",
      "It provides extended, more even wireless coverage across a larger area",
      "It only improves wired network speeds",
      "It eliminates the need for any cabling anywhere"
    ],
    answer: 1,
    explanation: "A mesh Wi-Fi system uses multiple coordinated access points to extend coverage more evenly throughout a large space than a single router could achieve alone."
  },

  // ---------------- Hardware (set 2) ----------------
  {
    id: "c1-hw-11",
    domain: "Hardware",
    question: "Which expansion slot standard is commonly used for installing modern graphics cards?",
    choices: ["PCI", "PCIe", "AGP", "ISA"],
    answer: 1,
    explanation: "PCI Express (PCIe) is the current standard expansion slot used for graphics cards and other high-bandwidth add-in cards on modern motherboards."
  },
  {
    id: "c1-hw-12",
    domain: "Hardware",
    question: "What is the purpose of an M.2 slot on a modern motherboard?",
    choices: [
      "It connects a mouse or keyboard",
      "It connects high-speed SSDs (NVMe or SATA) directly to the motherboard",
      "It provides additional USB ports",
      "It connects a printer"
    ],
    answer: 1,
    explanation: "M.2 slots allow small, high-speed SSDs to connect directly to the motherboard, often supporting the much faster NVMe protocol over PCIe."
  },
  {
    id: "c1-hw-13",
    domain: "Hardware",
    question: "Which tool should be used to properly remove a stripped screw from a computer case?",
    choices: ["A flathead screwdriver of the wrong size", "A screw extractor tool", "Pliers to strip it further", "A magnet only"],
    answer: 1,
    explanation: "A screw extractor is specifically designed to grip and remove screws whose heads have been stripped, without further damaging the screw or surrounding material."
  },
  {
    id: "c1-hw-14",
    domain: "Hardware",
    question: "What is the function of a heatsink on a computer component?",
    choices: [
      "It stores data",
      "It dissipates heat away from a component like the CPU or GPU",
      "It regulates voltage",
      "It provides wireless connectivity"
    ],
    answer: 1,
    explanation: "A heatsink draws heat away from a hot component and dissipates it into the surrounding air, often paired with a fan for active cooling."
  },
  {
    id: "c1-hw-15",
    domain: "Hardware",
    question: "Which of the following is generally true about solid-state drives (SSDs) compared to traditional hard disk drives (HDDs)?",
    choices: [
      "SSDs have moving mechanical parts, just like HDDs",
      "SSDs are generally faster and more resistant to physical shock than HDDs",
      "SSDs always have less storage capacity than HDDs",
      "SSDs cannot be used as the primary OS drive"
    ],
    answer: 1,
    explanation: "SSDs use flash memory with no moving parts, making them faster and more resistant to physical shock than mechanical HDDs."
  },
  {
    id: "c1-hw-16",
    domain: "Hardware",
    question: "A technician wants to add storage capacity using RAID for improved performance, without needing redundancy. Which RAID level should be used?",
    choices: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    answer: 0,
    explanation: "RAID 0 stripes data across multiple drives for improved performance and combined capacity, but provides no redundancy — a single drive failure loses all data."
  },
  {
    id: "c1-hw-17",
    domain: "Hardware",
    question: "Which power connector supplies supplemental power directly to the motherboard to support CPU operation?",
    choices: ["The 24-pin ATX connector", "The 4/8-pin CPU (EPS) connector", "A SATA power connector", "A Molex connector"],
    answer: 1,
    explanation: "The 4-pin or 8-pin EPS/CPU power connector delivers dedicated power specifically for the CPU, separate from the main 24-pin ATX motherboard connector."
  },
  {
    id: "c1-hw-18",
    domain: "Hardware",
    question: "What is the purpose of a KVM switch?",
    choices: [
      "It manages network traffic between subnets",
      "It allows one keyboard, video monitor, and mouse to control multiple computers",
      "It increases a system's RAM capacity",
      "It provides surge protection"
    ],
    answer: 1,
    explanation: "A KVM (Keyboard, Video, Mouse) switch lets a single set of peripherals control multiple computers, switching between them as needed."
  },
  {
    id: "c1-hw-19",
    domain: "Hardware",
    question: "Which type of printer uses a striking mechanism against an ink ribbon, often used for multi-part carbon forms?",
    choices: ["Inkjet", "Laser", "Impact/dot-matrix", "Thermal"],
    answer: 2,
    explanation: "Impact (dot-matrix) printers physically strike an ink ribbon against paper, which is why they remain useful for printing multi-part carbonless forms."
  },
  {
    id: "c1-hw-20",
    domain: "Hardware",
    question: "A technician is upgrading a PC's CPU. What should be checked FIRST before purchasing a new CPU?",
    choices: ["The case color", "Motherboard socket compatibility", "Monitor resolution", "Keyboard layout"],
    answer: 1,
    explanation: "A new CPU must be physically and electrically compatible with the motherboard's socket type, so this must be verified before any purchase."
  },

  // ---------------- Virtualization and Cloud Computing (set 2) ----------------
  {
    id: "c1-vc-11",
    domain: "Virtualization and Cloud Computing",
    question: "What term describes running an application in an isolated user-space instance that shares the host OS kernel, as a lighter-weight alternative to a full VM?",
    choices: ["Hypervisor", "Container", "Sandbox drive", "Partition"],
    answer: 1,
    explanation: "Containers package an application with its dependencies while sharing the host OS kernel, making them more lightweight than full virtual machines."
  },
  {
    id: "c1-vc-12",
    domain: "Virtualization and Cloud Computing",
    question: "Which cloud characteristic allows customers to provision computing resources on-demand without requiring human interaction with the provider?",
    choices: ["Resource pooling", "On-demand self-service", "Measured service", "Broad network access"],
    answer: 1,
    explanation: "On-demand self-service lets customers automatically provision resources like server time or storage as needed, without contacting the provider directly."
  },
  {
    id: "c1-vc-13",
    domain: "Virtualization and Cloud Computing",
    question: "What is a common reason an organization uses Virtual Desktop Infrastructure (VDI)?",
    choices: [
      "To eliminate the need for any network connection",
      "To centrally host and manage desktop environments that users access remotely",
      "To replace all physical servers with laptops",
      "To disable all remote access to company systems"
    ],
    answer: 1,
    explanation: "VDI hosts desktop operating systems centrally on servers, letting users remotely access a consistent, centrally managed desktop from various devices."
  },
  {
    id: "c1-vc-14",
    domain: "Virtualization and Cloud Computing",
    question: "Which term describes paying only for the cloud resources actually consumed, rather than a flat upfront fee?",
    choices: ["Capital expenditure model", "Pay-as-you-go / metered billing", "Perpetual licensing", "Site licensing"],
    answer: 1,
    explanation: "Pay-as-you-go (metered) billing charges customers based on actual resource consumption, a defining characteristic of most public cloud services."
  },
  {
    id: "c1-vc-15",
    domain: "Virtualization and Cloud Computing",
    question: "A technician wants to test a new operating system without affecting their existing PC installation. What is a practical solution?",
    choices: [
      "Reformat the primary hard drive",
      "Install and run the OS inside a virtual machine",
      "Replace the motherboard",
      "Disable the BIOS entirely"
    ],
    answer: 1,
    explanation: "Running the new OS inside a VM lets a technician test it safely in isolation, without touching the host system's existing installation."
  },
  {
    id: "c1-vc-16",
    domain: "Virtualization and Cloud Computing",
    question: "Which setting must typically be enabled in a system's BIOS/UEFI to allow virtualization software to create and run VMs efficiently?",
    choices: ["Secure Boot", "Hardware virtualization support (e.g., Intel VT-x / AMD-V)", "Fast Boot", "Legacy boot mode"],
    answer: 1,
    explanation: "Hardware-assisted virtualization extensions (Intel VT-x or AMD-V) must be enabled in firmware for hypervisors to run VMs efficiently."
  },
  {
    id: "c1-vc-17",
    domain: "Virtualization and Cloud Computing",
    question: "What is the purpose of a cloud file synchronization service, such as a shared cloud drive?",
    choices: [
      "It encrypts local hard drives only",
      "It keeps files updated and accessible across multiple devices and locations",
      "It replaces the need for any internet access",
      "It manages virtual machine snapshots"
    ],
    answer: 1,
    explanation: "Cloud sync services keep a copy of files updated across all of a user's connected devices, providing access from anywhere with an internet connection."
  },
  {
    id: "c1-vc-18",
    domain: "Virtualization and Cloud Computing",
    question: "Which of the following is a security consideration unique to shared public cloud environments?",
    choices: [
      "Physical theft of on-premises servers",
      "Multi-tenancy risk, where other customers share the same underlying infrastructure",
      "Local power outages at a single office",
      "Damage to local network cabling"
    ],
    answer: 1,
    explanation: "In a public cloud, multiple customers (tenants) share the same underlying physical infrastructure, introducing multi-tenancy risks not present in dedicated on-premises environments."
  },
  {
    id: "c1-vc-19",
    domain: "Virtualization and Cloud Computing",
    question: "What is 'live migration' in a virtualized environment?",
    choices: [
      "Copying files to a USB drive",
      "Moving a running VM from one physical host to another with minimal or no downtime",
      "Upgrading a physical server's RAM",
      "Formatting a VM's virtual disk"
    ],
    answer: 1,
    explanation: "Live migration transfers a running VM between physical hosts while it continues operating, minimizing or eliminating downtime for users."
  },
  {
    id: "c1-vc-20",
    domain: "Virtualization and Cloud Computing",
    question: "Which cloud deployment model would be MOST appropriate for several government agencies that need to share resources under similar compliance requirements?",
    choices: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
    answer: 2,
    explanation: "A community cloud is shared by several organizations with common concerns, such as compliance requirements, making it well suited to a group of related agencies."
  },

  // ---------------- Hardware and Network Troubleshooting (set 2) ----------------
  {
    id: "c1-tr-11",
    domain: "Hardware and Network Troubleshooting",
    question: "A user's wireless mouse and keyboard are unresponsive, but wired peripherals work fine. What is a likely FIRST troubleshooting step?",
    choices: [
      "Reinstall the operating system",
      "Check or replace the batteries and verify the wireless USB receiver is properly connected",
      "Replace the motherboard",
      "Reformat the hard drive"
    ],
    answer: 1,
    explanation: "Wireless peripheral issues are most often caused by dead batteries or a disconnected/loose USB receiver, which should be checked before anything more drastic."
  },
  {
    id: "c1-tr-12",
    domain: "Hardware and Network Troubleshooting",
    question: "A desktop intermittently loses network connectivity, and the NIC's link light turns off during those times. What should be checked?",
    choices: ["Monitor settings", "The network cable, port, and NIC connection", "The CPU cooler", "The optical drive"],
    answer: 1,
    explanation: "A link light that goes dark indicates a physical connectivity problem, so the cable, switch port, and NIC connection should be checked first."
  },
  {
    id: "c1-tr-13",
    domain: "Hardware and Network Troubleshooting",
    question: "A computer's date and time keep resetting to an incorrect value after every reboot, even after manual correction. What is the MOST likely cause?",
    choices: ["A failing CMOS battery", "A corrupted operating system", "Bad RAM", "A failing GPU"],
    answer: 0,
    explanation: "A dying CMOS battery can't retain the system clock and BIOS settings while powered off, causing the date/time to reset on every restart."
  },
  {
    id: "c1-tr-14",
    domain: "Hardware and Network Troubleshooting",
    question: "Multiple users report they cannot reach any external websites, though internal file shares work fine. What should be checked FIRST?",
    choices: ["Each user's mouse settings", "DNS settings and the default gateway/router configuration", "Individual monitor cables", "Keyboard drivers"],
    answer: 1,
    explanation: "Internal resources working while external access fails points to a DNS or gateway/routing problem rather than an issue with individual workstations."
  },
  {
    id: "c1-tr-15",
    domain: "Hardware and Network Troubleshooting",
    question: "A print job is stuck in the print queue and won't clear or print. What is a reasonable troubleshooting step?",
    choices: ["Restart the print spooler service", "Replace the printer entirely", "Reinstall the operating system", "Replace the network switch"],
    answer: 0,
    explanation: "Restarting the print spooler service often clears a stuck queue caused by a hung print job, without needing to replace any hardware."
  },
  {
    id: "c1-tr-16",
    domain: "Hardware and Network Troubleshooting",
    question: "A user's external hard drive is not recognized by their computer. What should be checked FIRST?",
    choices: [
      "Cable connections and whether the drive appears in Disk Management",
      "The CPU temperature",
      "The monitor cable",
      "The keyboard layout"
    ],
    answer: 0,
    explanation: "Basic connection checks and confirming whether the OS detects the drive at all (via Disk Management) should come before deeper diagnosis."
  },
  {
    id: "c1-tr-17",
    domain: "Hardware and Network Troubleshooting",
    question: "A laptop's fan runs loudly and constantly, and the device feels hot to the touch. What is a likely cause and remedy?",
    choices: [
      "This is normal behavior and requires no action",
      "Dust buildup is restricting airflow; clean the vents and fans",
      "The battery needs replacing and nothing else",
      "The RAM simply needs reseating and nothing else"
    ],
    answer: 1,
    explanation: "Dust accumulation blocking vents and fans is a very common cause of loud fan noise and overheating, and cleaning them often resolves the issue."
  },
  {
    id: "c1-tr-18",
    domain: "Hardware and Network Troubleshooting",
    question: "After a power outage, a desktop won't boot and shows no lights or fan activity at all. What should be checked FIRST?",
    choices: ["The GPU driver", "The power cable, outlet, and power supply switch/connections", "The OS boot order", "The DNS settings"],
    answer: 1,
    explanation: "No lights or fan activity at all points to a power delivery problem, so the cable, outlet, and PSU connections/switch should be checked first."
  },
  {
    id: "c1-tr-19",
    domain: "Hardware and Network Troubleshooting",
    question: "A technician suspects a duplicate IP address is causing connectivity conflicts on the network. Which command helps identify IP configuration details on a Windows PC?",
    choices: ["ipconfig /all", "format C:", "diskpart", "regedit"],
    answer: 0,
    explanation: "ipconfig /all displays detailed IP configuration for all adapters, which helps identify address conflicts or misconfiguration."
  },
  {
    id: "c1-tr-20",
    domain: "Hardware and Network Troubleshooting",
    question: "A user reports their laptop's touchpad isn't working, but an external USB mouse works fine. What should be checked FIRST?",
    choices: [
      "The GPU driver",
      "Whether the touchpad has been disabled via a function-key toggle or in Device Manager/settings",
      "The power supply",
      "The network adapter"
    ],
    answer: 1,
    explanation: "Many laptops have a function-key shortcut or setting to disable the touchpad (often to avoid interference from an external mouse), which should be checked before assuming a hardware fault."
  }
];
