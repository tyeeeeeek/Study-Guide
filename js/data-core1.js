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
  }
];
