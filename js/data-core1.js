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
  },

  // ================= HARD / TRICKY QUESTIONS =================
  // These target easily-confused concepts, edge cases, and exam-style
  // "which is NOT / EXCEPT" and multi-step-order traps.

  // ---------------- Mobile Devices (hard) ----------------
  {
    id: "c1-md-h1",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "A company allows employees to check corporate email on personal phones by having them accept an Exchange ActiveSync (EAS) mailbox policy, with no additional MDM containerization app installed. An employee is terminated, and IT issues a remote wipe. What is the MOST likely result on that employee's personal phone?",
    choices: [
      "Only the corporate mail app and its data are removed",
      "The entire device is reset to factory defaults, erasing personal data along with corporate data",
      "The wipe command is silently ignored because EAS cannot wipe personal devices",
      "Only the device's lock screen PIN is reset"
    ],
    answer: 1,
    explanation: "Without a true MDM/containerization solution creating a separate corporate workspace, a standard Exchange ActiveSync remote wipe performs a full factory reset of the device — it cannot selectively remove only corporate data. This is why BYOD policies relying on EAS alone carry real risk to employees' personal data, and why selective wipe requires a full MDM or MAM solution with a managed container."
  },
  {
    id: "c1-md-h2",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "A user's Android phone displays 'No SIM' after a recent OS update, but the exact same SIM card works fine when tested in another phone. What should be suspected FIRST in the original phone, now that the SIM itself is ruled out?",
    choices: [
      "The SIM card is still the most likely cause",
      "The phone's SIM tray/reader contacts or a baseband/software issue introduced by the update",
      "The mobile carrier's entire network is down",
      "The phone's battery"
    ],
    answer: 1,
    explanation: "Since the SIM was proven good in another device, the fault lies within the original phone itself — either the physical SIM tray/reader contacts or a baseband/radio software issue triggered by the update — not the SIM, a carrier-wide outage, or the battery."
  },
  {
    id: "c1-md-h3",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "An organization wants to enforce a device-wide passcode policy and be able to remotely wipe an ENTIRE personal device (including personal apps and photos) if it's lost. Which approach is required to achieve this level of control?",
    choices: [
      "Mobile Application Management (MAM) alone",
      "Full Mobile Device Management (MDM) enrollment",
      "A basic Exchange ActiveSync mailbox policy alone",
      "A guest Wi-Fi network policy"
    ],
    answer: 1,
    explanation: "MAM only manages specific corporate apps and their data, not the whole device. Full device-level control — passcode enforcement and a complete wipe of everything on the device — requires full MDM enrollment."
  },
  {
    id: "c1-md-h4",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "Which of the following is true regarding a USB-C port's support for DisplayPort Alt Mode video output?",
    choices: [
      "Any USB-C port or cable is guaranteed to support DisplayPort Alt Mode, since it's part of the connector standard",
      "USB-C defines only a physical connector shape; DisplayPort Alt Mode (and other features like Thunderbolt or even USB 3 speeds) depends on what capabilities that specific port and cable actually implement",
      "Only USB-C ports with a blue-colored connector support video output",
      "DisplayPort Alt Mode requires USB-C version 1.0 specifically"
    ],
    answer: 1,
    explanation: "A common trap: USB-C is just a connector shape. Whether a given USB-C port/cable actually supports DisplayPort Alt Mode, Thunderbolt, or higher USB data speeds depends entirely on what the manufacturer built into that specific port and cable — it is never guaranteed just because the connector is USB-C."
  },
  {
    id: "c1-md-h5",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "A device requires 45W USB Power Delivery (PD) for its fastest charging speed, but only an 18W USB-C PD charger is available. What will happen if the 18W charger is used?",
    choices: [
      "The device will not charge at all",
      "The device will still charge, just more slowly, since USB PD negotiates the highest wattage both sides support",
      "The 18W charger will be permanently damaged",
      "The device will be damaged due to insufficient voltage"
    ],
    answer: 1,
    explanation: "USB Power Delivery negotiates the best wattage that both the charger and device support. Using a lower-wattage PD charger than the device's maximum simply results in slower charging — it does not prevent charging or damage either device, a nuance that trips up people who assume any mismatch causes a failure."
  },
  {
    id: "c1-md-h6",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "Which biometric authentication method is generally considered WEAKEST, sometimes able to be defeated with just a high-resolution photograph, compared to fingerprint or infrared-based facial recognition?",
    choices: [
      "Fingerprint scanning",
      "Basic 2D facial recognition using only a standard camera (no infrared depth sensing)",
      "Iris scanning",
      "A hardware security key"
    ],
    answer: 1,
    explanation: "Simple 2D facial recognition relying only on a standard camera (without infrared depth-sensing, like true 3D facial mapping) can sometimes be tricked with a photo of the authorized user, unlike fingerprint scanning, iris scanning, or a physical hardware key."
  },
  {
    id: "c1-md-h7",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "A user edits the same cloud-synced note on their phone and tablet while BOTH devices are offline, then reconnects both to Wi-Fi around the same time. What most likely happens?",
    choices: [
      "The app automatically and perfectly merges both sets of edits with zero data loss",
      "A sync conflict occurs; the app may prompt the user to pick a version, or automatically keep one version, potentially discarding some changes",
      "Both devices are automatically factory reset",
      "The user's cloud account is automatically suspended"
    ],
    answer: 1,
    explanation: "Concurrent offline edits to the same file are a classic cause of sync conflicts — the service generally can't intelligently merge divergent changes, so it either prompts the user to choose a version or silently keeps one (often 'last write wins'), which can quietly discard changes made on the other device."
  },
  {
    id: "c1-md-h8",
    domain: "Mobile Devices",
    difficulty: "hard",
    question: "Which wireless attack technique specifically sends unsolicited messages or data to a nearby Bluetooth device WITHOUT establishing a paired connection?",
    choices: ["Bluejacking", "Bluesnarfing", "Warflying", "An evil twin attack"],
    answer: 0,
    explanation: "Bluejacking sends unsolicited messages/data over Bluetooth without pairing. It's often confused with the similarly-named Bluesnarfing, which actually steals data (like contacts) from a target device — a classic pair of easily-mixed-up terms."
  },

  // ---------------- Networking (hard) ----------------
  {
    id: "c1-net-h1",
    domain: "Networking",
    difficulty: "hard",
    question: "A workstation has IP address 192.168.10.50 with subnet mask 255.255.255.192. Which of the following addresses is on the SAME subnet?",
    choices: ["192.168.10.65", "192.168.10.100", "192.168.10.30", "192.168.11.50"],
    answer: 2,
    explanation: "A /26 mask (255.255.255.192) creates blocks of 64 addresses per subnet: .0–.63, .64–.127, .128–.191, .192–.255. Address .50 falls in the .0–.63 block, and only .30 also falls in that same block. Both .65 and .100 fall in the next block (.64–.127), and .11.50 is in a different third octet entirely."
  },
  {
    id: "c1-net-h2",
    domain: "Networking",
    difficulty: "hard",
    question: "Which port is used for a mail CLIENT to submit outgoing mail to its own mail server (often with STARTTLS encryption), as distinct from port 25's traditional server-to-server relay role?",
    choices: ["21", "587", "110", "143"],
    answer: 1,
    explanation: "Port 587 is the standard mail submission port used by clients sending outgoing mail to their server, typically with encryption. Port 25 is traditionally reserved for server-to-server relay, while 110 and 143 are POP3 and IMAP — both used for RECEIVING mail, not sending it."
  },
  {
    id: "c1-net-h3",
    domain: "Networking",
    difficulty: "hard",
    question: "A network administrator installs a Layer 3 switch in the server room. Which capability does this device have that a standard Layer 2-only switch does NOT?",
    choices: [
      "The ability to forward frames using a MAC address table",
      "The ability to perform IP routing (such as inter-VLAN routing), in addition to standard Layer 2 switching",
      "The ability to hand out DHCP leases only",
      "The ability to automatically encrypt all traffic"
    ],
    answer: 1,
    explanation: "A Layer 3 switch adds IP routing functionality — most notably inter-VLAN routing — on top of the standard Layer 2 (MAC-address-based) switching that both types of switches perform."
  },
  {
    id: "c1-net-h4",
    domain: "Networking",
    difficulty: "hard",
    question: "Which wireless security protocol, despite using strong AES encryption, was found vulnerable to the KRACK (Key Reinstallation Attack) exploit targeting its 4-way handshake?",
    choices: ["WEP", "WPA", "WPA2", "An open (unsecured) network"],
    answer: 2,
    explanation: "KRACK specifically exploited a flaw in WPA2's 4-way handshake implementation. It's a good reminder that even a protocol using strong encryption (AES) can still have serious implementation-level vulnerabilities."
  },
  {
    id: "c1-net-h5",
    domain: "Networking",
    difficulty: "hard",
    question: "A technician needs to connect two computers directly together via their Ethernet ports, with no switch in between, using older NICs that lack Auto-MDIX. Which cable type is required?",
    choices: ["A straight-through cable", "A crossover cable", "A rollover cable", "A coaxial cable"],
    answer: 1,
    explanation: "Traditionally, a crossover cable is required for direct NIC-to-NIC connections, while straight-through cables connect a device to a switch/router. Modern NICs with Auto-MDIX can often work around this automatically, which is why the question specifies older NICs lacking that feature."
  },
  {
    id: "c1-net-h6",
    domain: "Networking",
    difficulty: "hard",
    question: "Which DNS record type maps a domain name to an IPv6 address, as opposed to an IPv4 address?",
    choices: ["A record", "AAAA record", "CNAME record", "MX record"],
    answer: 1,
    explanation: "An 'A' record maps a name to an IPv4 address, while a 'AAAA' (quad-A) record maps a name to an IPv6 address — a pair of similarly-named record types that are easy to mix up."
  },
  {
    id: "c1-net-h7",
    domain: "Networking",
    difficulty: "hard",
    question: "A network allows many internal devices to share a single public IP address simultaneously by tracking each connection using unique port numbers. What is this specific form of NAT called?",
    choices: [
      "Static NAT",
      "Basic dynamic NAT (a one-to-one address pool)",
      "Port Address Translation (PAT), also called NAT overload",
      "DMZ NAT"
    ],
    answer: 2,
    explanation: "PAT (also called NAT overload) allows many internal private addresses to share one public IP by distinguishing connections via port numbers — unlike static NAT (a fixed 1:1 mapping) or basic dynamic NAT (a pool of public addresses, still roughly 1:1 at any given moment)."
  },
  {
    id: "c1-net-h8",
    domain: "Networking",
    difficulty: "hard",
    question: "Two switches are connected with redundant physical links between them, and the network is experiencing broadcast storms and unstable MAC address tables. Which feature, if not properly enabled, is the MOST likely cause?",
    choices: ["VLAN tagging", "Spanning Tree Protocol (STP)", "DHCP snooping", "Port security"],
    answer: 1,
    explanation: "Without STP, redundant physical links between switches create Layer 2 loops, which cause broadcast storms and constantly-changing MAC address tables. STP prevents this by detecting loops and blocking redundant paths until they're needed."
  },

  // ---------------- Hardware (hard) ----------------
  {
    id: "c1-hw-h1",
    domain: "Hardware",
    difficulty: "hard",
    question: "A RAID 5 array is built using four 2TB drives. Approximately how much usable storage capacity does this array provide?",
    choices: ["8TB", "2TB", "6TB", "4TB"],
    answer: 2,
    explanation: "RAID 5 dedicates the equivalent of one drive's worth of space to distributed parity. With four 2TB drives, usable capacity is (4 − 1) × 2TB = 6TB."
  },
  {
    id: "c1-hw-h2",
    domain: "Hardware",
    difficulty: "hard",
    question: "A RAID 10 (1+0) array is built using four 1TB drives. What is the usable capacity, and how many simultaneous drive failures can it reliably survive?",
    choices: [
      "4TB usable; it can survive any 2 drive failures",
      "2TB usable; it's guaranteed to survive at least 1 drive failure, and can survive 2 simultaneous failures only if they aren't from the same mirrored pair",
      "3TB usable; it can survive only 1 drive failure",
      "2TB usable; it cannot survive any drive failure"
    ],
    answer: 1,
    explanation: "RAID 10 mirrors pairs of drives, then stripes across the mirrored pairs — with four 1TB drives, usable capacity is 2TB (half of the raw total). It's always safe from a single drive failure, but surviving two simultaneous failures depends on whether they happen to come from different mirrored pairs — it's not an unconditional guarantee."
  },
  {
    id: "c1-hw-h3",
    domain: "Hardware",
    difficulty: "hard",
    question: "Which type of memory error-checking can both DETECT and automatically CORRECT single-bit memory errors, unlike basic parity RAM which can only detect them?",
    choices: ["Non-parity RAM", "Parity RAM", "ECC (Error-Correcting Code) RAM", "Dual-channel RAM"],
    answer: 2,
    explanation: "ECC RAM can detect and correct single-bit errors (and detect many multi-bit errors), while basic parity RAM can only detect a single-bit error without correcting it. Non-parity and dual-channel RAM configurations offer no error correction at all."
  },
  {
    id: "c1-hw-h4",
    domain: "Hardware",
    difficulty: "hard",
    question: "A technician installs a new NVMe M.2 SSD, but the system only recognizes it running at much slower speeds than expected for NVMe. What is the MOST likely cause?",
    choices: [
      "The SSD is defective",
      "The specific M.2 slot used is wired for SATA signaling rather than PCIe/NVMe lanes",
      "The power supply is too weak",
      "The RAM is incompatible with the SSD"
    ],
    answer: 1,
    explanation: "Some M.2 slots are wired only for SATA signaling rather than the PCIe lanes NVMe requires. Installing an NVMe drive into such a slot (or a slot that only supports a lower link width) causes it to run at reduced speed rather than true NVMe performance — a commonly confusing quirk of the M.2 form factor supporting multiple protocols."
  },
  {
    id: "c1-hw-h5",
    domain: "Hardware",
    difficulty: "hard",
    question: "Which CPU feature allows a single physical core to present two logical processors/threads to the operating system simultaneously?",
    choices: ["Multi-core processing", "Hyper-Threading / Simultaneous Multithreading (SMT)", "Overclocking", "Thermal throttling"],
    answer: 1,
    explanation: "Hyper-Threading (Intel's branding) or SMT (the general term) lets one physical core handle two logical threads, which is distinct from simply having multiple separate physical cores — a distinction often confused with 'more cores.'"
  },
  {
    id: "c1-hw-h6",
    domain: "Hardware",
    difficulty: "hard",
    question: "A power supply is rated '80 PLUS Gold.' What does this certification primarily indicate?",
    choices: [
      "The PSU's maximum wattage capacity",
      "The PSU's energy efficiency (how much AC input is converted to usable DC output vs. wasted as heat) at specific load levels",
      "Which connector types the PSU includes",
      "The length of the PSU's warranty"
    ],
    answer: 1,
    explanation: "The 80 PLUS certification tiers (Bronze, Silver, Gold, Platinum, Titanium) rate a power supply's efficiency at converting AC input to usable DC output at defined load percentages — they say nothing directly about wattage capacity, connectors, or warranty."
  },
  {
    id: "c1-hw-h7",
    domain: "Hardware",
    difficulty: "hard",
    question: "Removing the CMOS battery briefly is a common way to reset a forgotten BIOS/UEFI password on many desktop motherboards. Why does this trick often NOT work on modern laptops?",
    choices: [
      "Laptops don't have CMOS batteries",
      "Many modern laptop UEFI implementations store the password in a way that isn't cleared by removing a coin-cell battery, sometimes requiring vendor-specific tools or professional service",
      "It works identically on laptops and desktops",
      "Laptops never have BIOS/UEFI passwords"
    ],
    answer: 1,
    explanation: "Unlike many desktop boards, a lot of laptop UEFI firmware stores the supervisor password in a way a simple battery pull won't clear — often requiring a manufacturer-specific unlock procedure or professional service, which trips up people applying the classic desktop trick."
  },
  {
    id: "c1-hw-h8",
    domain: "Hardware",
    difficulty: "hard",
    question: "Which printer maintenance task is specific to INKJET printers and generally not applicable to laser printers?",
    choices: [
      "Replacing the toner cartridge",
      "Cleaning or aligning the print heads",
      "Replacing the imaging drum",
      "Cleaning the fuser assembly"
    ],
    answer: 1,
    explanation: "Inkjet printers require periodic print head cleaning/alignment to prevent clogged nozzles — a maintenance concern unique to inkjet technology, while toner, drums, and fusers are laser printer components."
  },

  // ---------------- Virtualization and Cloud Computing (hard) ----------------
  {
    id: "c1-vc-h1",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "A Type 1 hypervisor hosts dozens of production VMs on one physical server. One VM becomes infected with malware. Under normal, properly functioning circumstances, what is the expected impact on the OTHER VMs on that host?",
    choices: [
      "All VMs on the host are automatically compromised too, since they share hardware",
      "The other VMs should remain isolated and unaffected, since hypervisor-level isolation separates VM memory and resources — though a rare hypervisor vulnerability ('VM escape') could theoretically break this isolation",
      "The physical host immediately powers itself off as a built-in security measure",
      "Only VMs created after the infected one are affected"
    ],
    answer: 1,
    explanation: "Hypervisor isolation is specifically designed to keep a compromised VM from affecting others on the same host. The one real caveat is a 'VM escape' vulnerability — rare, but the reason isolation isn't treated as an absolute guarantee in security discussions."
  },
  {
    id: "c1-vc-h2",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "Which statement BEST distinguishes 'resource pooling' from 'rapid elasticity' as essential cloud computing characteristics?",
    choices: [
      "They are the same concept described two different ways",
      "Resource pooling refers to a provider serving multiple customers from a shared pool of dynamically assigned resources; rapid elasticity refers to the ability to quickly scale those resources up or down as demand changes",
      "Resource pooling means the customer owns the physical hardware",
      "Rapid elasticity refers only to network bandwidth"
    ],
    answer: 1,
    explanation: "These are two distinct essential cloud characteristics that are easy to conflate: pooling describes shared, multi-tenant infrastructure, while elasticity describes the ability to scale allocated resources on demand."
  },
  {
    id: "c1-vc-h3",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "A company migrates a legacy on-premises application to a public cloud IaaS provider with minimal to no changes to the application itself. What is this migration strategy commonly called?",
    choices: ["Re-platforming", "Lift-and-shift (rehosting)", "Re-architecting", "Refactoring"],
    answer: 1,
    explanation: "'Lift-and-shift' (rehosting) moves an application to the cloud largely unchanged, unlike re-platforming (some optimization), or re-architecting/refactoring, which involve significant redesign to take advantage of cloud-native features."
  },
  {
    id: "c1-vc-h4",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "What is a key risk of 'VM sprawl' in a virtualized environment?",
    choices: [
      "It always improves overall performance",
      "Unused or forgotten VMs continue consuming host resources and software licensing, and unpatched ones can become significant security risks",
      "It automatically qualifies the organization for licensing discounts",
      "It has no meaningful downside"
    ],
    answer: 1,
    explanation: "VM sprawl — uncontrolled proliferation of VMs, many idle or forgotten — wastes compute resources and licensing costs, and forgotten, unpatched VMs quietly become serious security liabilities."
  },
  {
    id: "c1-vc-h5",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "Which of the following is true regarding nested virtualization (running a hypervisor inside a VM that is itself running on a hypervisor)?",
    choices: [
      "It is never possible on any platform",
      "Some modern hypervisors and CPUs support it, but it typically introduces additional performance overhead and complexity from the extra virtualization layer",
      "It always performs identically to bare-metal virtualization",
      "It removes the need for hardware virtualization extensions on the host CPU"
    ],
    answer: 1,
    explanation: "Nested virtualization is supported on some modern platforms but is not universal, and the added layer of virtualization typically introduces measurable performance overhead compared to running directly on bare metal."
  },
  {
    id: "c1-vc-h6",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "An organization keeps sensitive financial data processing in its private cloud, but automatically shifts overflow compute demand to a public cloud provider only during periods of peak load. What is this specific hybrid cloud use case called?",
    choices: ["Cloud bursting", "Cloud bridging", "Cloud tiering", "Cloud federation"],
    answer: 0,
    explanation: "'Cloud bursting' specifically describes using public cloud capacity to absorb temporary demand spikes while normal operations continue on a private cloud — a specific, named hybrid cloud pattern."
  },
  {
    id: "c1-vc-h7",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "A host with only 4 physical CPU cores runs several VMs whose ALLOCATED vCPUs add up to well more than 4 total. This is an example of what generally normal virtualization practice, which can cause performance problems only if overused?",
    choices: ["Virtualization sprawl", "CPU overcommitment/oversubscription", "Load balancing", "Live migration"],
    answer: 1,
    explanation: "Overcommitting (oversubscribing) vCPUs beyond the physical core count is common and often fine, since VMs rarely all demand 100% CPU simultaneously — but excessive overcommitment can degrade performance when many VMs demand CPU at once."
  },
  {
    id: "c1-vc-h8",
    domain: "Virtualization and Cloud Computing",
    difficulty: "hard",
    question: "Which statement BEST describes the difference between a full VM clone and a linked clone?",
    choices: [
      "A full clone is an entirely independent copy with its own complete virtual disk; a linked clone shares a base disk image and stores only the differences, saving space but creating a dependency on that original base image",
      "They are functionally identical in every respect",
      "A linked clone always uses more storage than a full clone",
      "A full clone cannot be powered on independently of the original VM"
    ],
    answer: 0,
    explanation: "Full clones are completely independent of the parent VM's disk. Linked clones save storage by referencing a shared base image and recording only the differences — but that dependency means the base image can't simply be deleted without breaking every linked clone built from it."
  },

  // ---------------- Hardware and Network Troubleshooting (hard) ----------------
  {
    id: "c1-tr-h1",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "A desktop won't boot. Following standard troubleshooting methodology, which of the following should generally be checked FIRST, before opening the case?",
    choices: [
      "Reseat the RAM modules",
      "Verify all external cables (power, monitor) are properly connected and test a known-good power outlet",
      "Replace the power supply",
      "Replace the motherboard"
    ],
    answer: 1,
    explanation: "Standard troubleshooting starts with the simplest, least invasive checks — cables and power — before moving on to opening the case, reseating components, or replacing parts."
  },
  {
    id: "c1-tr-h2",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "Per the standard CompTIA troubleshooting methodology, after a technician establishes a theory of probable cause and TESTS that theory, confirming it's correct, what should be done NEXT?",
    choices: [
      "Immediately close the ticket with no further action",
      "Establish a plan of action to resolve the problem, then implement the solution",
      "Escalate the issue regardless of the confirmed cause",
      "Formulate a brand-new theory even though the original one was confirmed"
    ],
    answer: 1,
    explanation: "The methodology flows: identify the problem → establish a theory → test the theory → establish a plan of action and implement the solution → verify full system functionality → document. Once a theory is confirmed, the correct next step is planning and implementing the fix, not skipping ahead or restarting the process."
  },
  {
    id: "c1-tr-h3",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "A user's computer runs extremely slowly, and Task Manager shows disk usage constantly at 100% even with few applications open. Which of the following is LEAST likely to be a direct cause?",
    choices: [
      "A failing or dying hard drive with degraded read/write performance",
      "Windows Search indexing or a Windows Update running in the background",
      "Malware performing disk-intensive activity",
      "A loose HDMI cable connected to the monitor"
    ],
    answer: 3,
    explanation: "A loose HDMI cable would affect video display, not disk activity — it's unrelated to this symptom. The other three are all legitimate, common causes of sustained high disk usage."
  },
  {
    id: "c1-tr-h4",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "A laptop intermittently shuts down only when running on battery power, but never while plugged into AC power. What is the MOST likely explanation?",
    choices: [
      "A failing GPU",
      "A degraded/failing battery unable to sustain sufficient voltage or capacity under load",
      "A corrupted operating system",
      "A bad network adapter"
    ],
    answer: 1,
    explanation: "Since the problem only appears on battery power (never on AC), the most direct explanation is the battery itself failing to sustain the system — the GPU, OS, and network adapter are unrelated to this power-source-specific symptom."
  },
  {
    id: "c1-tr-h5",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "After a Windows update, a user's all-in-one printer/scanner can still print fine, but scanning no longer works. What should be checked FIRST?",
    choices: [
      "Replace the entire all-in-one device",
      "Check whether the scanner-specific driver/software needs updating or reinstalling, since the update may have affected only that component",
      "Reinstall the entire operating system",
      "Replace the USB cable"
    ],
    answer: 1,
    explanation: "Since only the scanning function broke (printing still works) right after an update, the most targeted step is checking the scanner-specific driver or software, rather than replacing hardware or performing a full OS reinstall."
  },
  {
    id: "c1-tr-h6",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "A technician tests a network cable with a multimeter and confirms continuity on all 8 pins in the correct order, yet the connected device still shows no network activity. What should be checked NEXT?",
    choices: [
      "Retest cable continuity again with the same tool",
      "The switch port status/configuration, NIC driver, and link light activity — since basic continuity doesn't confirm actual data-signaling performance",
      "Assume the cable is bad regardless of the passing test",
      "Replace the entire computer"
    ],
    answer: 1,
    explanation: "A continuity test confirms wiring only — it says nothing about signal quality, port negotiation (speed/duplex), or driver issues. Passing one test doesn't rule out other causes of the connectivity problem."
  },
  {
    id: "c1-tr-h7",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "A monitor displays distorted colors and geometric artifacts, but only during high-motion video content — static images look completely fine. What is the MOST likely cause?",
    choices: [
      "A failing/overheating GPU, or a loose video cable affecting signal integrity under higher bandwidth demand",
      "A failing power supply",
      "A failing hard drive",
      "Incorrect DNS settings"
    ],
    answer: 0,
    explanation: "Artifacts that appear only under higher video bandwidth demand (motion) point to a GPU or video signal issue, not the power supply, storage, or network settings, which have no bearing on how video is rendered or displayed."
  },
  {
    id: "c1-tr-h8",
    domain: "Hardware and Network Troubleshooting",
    difficulty: "hard",
    question: "The standard malware removal best-practice process includes several ordered steps. Which of the following correctly comes BEFORE running anti-malware remediation scans?",
    choices: [
      "Re-enable System Restore",
      "Investigate and verify malware symptoms, then quarantine the infected system",
      "Educate the end user",
      "Schedule scans and run updates"
    ],
    answer: 1,
    explanation: "The standard process is: 1) investigate/verify symptoms, 2) quarantine the infected system, 3) disable System Restore, 4) remediate (update and run anti-malware scans), 5) schedule future scans/updates, 6) re-enable System Restore, 7) educate the end user. Quarantining after identifying symptoms happens early — well before remediation, scheduling scans, re-enabling System Restore, or educating the user."
  }
];
