window.BREACH_BLINDSPOTS_DATA = {
  "schemaVersion": 1,
  "snapshotDate": "2026-07-16",
  "coverage": "A curated, U.S.-weighted ledger built from English-language public sources. Core coverage begins in 2020, with selected landmark cases from 2015 through 2019 and rare earlier exceptions. Non-U.S. cases are included when they are globally significant or provide an unusually strong enterprise control lesson. It is not an exhaustive breach catalog, a breach notification service, or a claim of geographic completeness.",
  "disclosure": "I work at Vonage, where my role includes Network Powered Solutions. TechBlindspot is my independent personal project. This analysis uses public information and reflects my own views, not those of Vonage, Ericsson, or their affiliates.",
  "records": [
    {
      "id": "sec-x-sim-swap-2024",
      "type": "incident",
      "title": "SEC X account takeover via SIM swap",
      "subject": "U.S. Securities and Exchange Commission",
      "sector": "Government and financial markets",
      "actor": null,
      "timeframe": "Jan. 9, 2024",
      "sortDate": "2024-01-09",
      "disclosedDate": "2024-01-22",
      "status": "historical",
      "entryPath": "An apparent SIM swap at the carrier gave the attacker control of the phone number, which was then used to reset the X account password.",
      "earliestControlFailure": "Multi-factor authentication had been disabled and was not re-enabled before the incident.",
      "stages": [
        "factor recovery",
        "account takeover",
        "unauthorized publication"
      ],
      "impact": "An unauthorized post falsely announced approval of spot bitcoin exchange-traded products. The SEC reported no access to its systems, data, devices, or other social accounts.",
      "networkAssessment": {
        "fit": "direct",
        "signals": [
          "SIM Swap",
          "SIM Swap Subscription"
        ],
        "decisionPoint": "Password reset and factor recovery",
        "analysis": "A recent-SIM-change check could have blocked recovery or required a stronger proof before the password was reset. This is a direct match between a documented carrier event and an application decision that had not yet become irreversible.",
        "caveat": "A network signal is not a replacement for phishing-resistant MFA, hardened recovery, carrier account controls, or change alerts. Number Verification alone would not help after the attacker controlled the number.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "Statement on Unauthorized Access to the SEC's Account on X",
          "publisher": "U.S. Securities and Exchange Commission",
          "published": "2024-01-22",
          "url": "https://www.sec.gov/secgov-x-account",
          "role": "primary"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "change-healthcare-2024",
      "type": "incident",
      "title": "Change Healthcare ransomware attack",
      "subject": "Change Healthcare / UnitedHealth Group",
      "sector": "Healthcare",
      "actor": "ALPHV / BlackCat",
      "timeframe": "Feb. 12, 2024",
      "sortDate": "2024-02-12",
      "disclosedDate": "2024-02-21",
      "status": "historical",
      "entryPath": "Compromised credentials were used to access a remote Citrix portal that did not require multi-factor authentication.",
      "earliestControlFailure": "The remote access portal accepted a valid password without a second factor.",
      "stages": [
        "authentication",
        "lateral movement",
        "data theft",
        "ransomware"
      ],
      "impact": "The attack disrupted healthcare payments and claims processing across the United States and exposed sensitive health and personal data.",
      "networkAssessment": {
        "fit": "supporting",
        "signals": [
          "Silent Authentication",
          "Number Verification"
        ],
        "decisionPoint": "Remote portal login",
        "analysis": "A network-backed factor could have stopped a password-only login if the account, device, operator, and geography were eligible. The value is real, but the same policy decision can be protected by established phishing-resistant authentication.",
        "caveat": "Phishing-resistant MFA, conditional access, segmentation, legacy-system retirement, and recovery planning are the primary controls. A mobile-network dependency also needs a defined fallback path.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "What We Learned: Change Healthcare Cyber Attack",
          "publisher": "U.S. House Committee on Energy and Commerce",
          "published": "2024-05-01",
          "url": "https://energycommerce.house.gov/posts/what-we-learned-change-healthcare-cyber-attack",
          "role": "government-record"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "midnight-blizzard-microsoft-2023",
      "type": "incident",
      "title": "Midnight Blizzard access through a legacy Microsoft tenant",
      "subject": "Microsoft",
      "sector": "Technology",
      "actor": "Midnight Blizzard",
      "timeframe": "Nov. 2023-Jan. 2024",
      "sortDate": "2024-01-19",
      "disclosedDate": "2024-01-19",
      "status": "historical",
      "entryPath": "Password spraying compromised a legacy non-production test tenant account.",
      "earliestControlFailure": "The legacy account did not have multi-factor authentication and retained permissions that enabled access through OAuth applications.",
      "stages": [
        "authentication",
        "OAuth authorization",
        "email access",
        "exfiltration"
      ],
      "impact": "The actor accessed a small percentage of Microsoft corporate email accounts and exfiltrated emails and attached documents.",
      "networkAssessment": {
        "fit": "no-material-impact",
        "signals": [],
        "decisionPoint": "Initial login to a legacy tenant",
        "analysis": "A test or machine identity may have no legitimate mobile subscriber to verify. Adding a phone-dependent signal would not fix legacy-account sprawl, missing MFA, or excessive OAuth reach.",
        "caveat": "Remove legacy accounts, enforce phishing-resistant MFA for people, use workload identities for machines, minimize OAuth permissions, and monitor application consent.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "Microsoft Actions Following Attack by Nation State Actor Midnight Blizzard",
          "publisher": "Microsoft Security Response Center",
          "published": "2024-01-19",
          "url": "https://www.microsoft.com/en-us/msrc/blog/2024/01/microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard/",
          "role": "primary"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "medium",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "unc5537-snowflake-2024",
      "type": "campaign",
      "title": "UNC5537 theft from Snowflake customer instances",
      "subject": "Multiple Snowflake customers",
      "sector": "Cross-sector",
      "actor": "UNC5537",
      "timeframe": "Observed April-June 2024",
      "sortDate": "2024-06-10",
      "disclosedDate": "2024-06-10",
      "status": "historical",
      "entryPath": "The actor used customer credentials previously stolen by infostealer malware to sign in to Snowflake customer instances.",
      "earliestControlFailure": "Many affected accounts lacked multi-factor authentication, retained old valid credentials, and did not restrict access through network policies.",
      "stages": [
        "authentication",
        "database reconnaissance",
        "data staging",
        "exfiltration",
        "extortion"
      ],
      "impact": "The campaign led to large-scale data theft and extortion across multiple organizations using independently managed Snowflake accounts.",
      "networkAssessment": {
        "fit": "supporting",
        "signals": [
          "Silent Authentication",
          "Number Verification",
          "Location Verification"
        ],
        "decisionPoint": "Interactive human login or sensitive export",
        "analysis": "A network-backed step-up could reduce risk for eligible human logins or unusually sensitive exports. It would be far less useful for service accounts, API credentials, malware-controlled endpoints, or already stolen sessions.",
        "caveat": "Phishing-resistant MFA, credential rotation, network policies, contractor endpoint controls, session protection, and export monitoring are central.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "UNC5537 Targets Snowflake Customer Instances for Data Theft and Extortion",
          "publisher": "Google Cloud Mandiant",
          "published": "2024-06-10",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion",
          "role": "direct-response"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "okta-support-system-2023",
      "type": "incident",
      "title": "Okta support system compromise and session hijacking",
      "subject": "Okta",
      "sector": "Identity infrastructure",
      "actor": null,
      "timeframe": "Sept. 28-Oct. 17, 2023",
      "sortDate": "2023-10-17",
      "disclosedDate": "2023-10-20",
      "status": "historical",
      "entryPath": "A support-system service account credential was exposed through a personal Google profile used on an Okta-managed laptop.",
      "earliestControlFailure": "Credential storage crossed personal and corporate boundaries, and downloaded support files contained reusable session tokens.",
      "stages": [
        "service-account access",
        "support-file collection",
        "session hijacking"
      ],
      "impact": "Files associated with 134 customers were accessed. Session tokens from support files were used to hijack five customer sessions.",
      "networkAssessment": {
        "fit": "no-material-impact",
        "signals": [],
        "decisionPoint": "Service credential use and session replay",
        "analysis": "SIM Swap and Number Verification do not address stolen service credentials or valid session tokens. A location change might contribute to a broader reauthentication policy, but that is an adjacent signal rather than a direct fix.",
        "caveat": "Token binding, short-lived sessions, reauthentication, credential isolation, personal-profile restrictions, and support-file hygiene are stronger controls.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "Unauthorized Access to Okta's Support Case Management System: Root Cause and Remediation",
          "publisher": "Okta Security",
          "published": "2023-11-03",
          "url": "https://sec.okta.com/articles/2023/11/unauthorized-access-oktas-support-case-management-system-root-cause/",
          "role": "primary"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "cloudflare-thanksgiving-2023",
      "type": "incident",
      "title": "Cloudflare compromise using unrotated Okta-era credentials",
      "subject": "Cloudflare",
      "sector": "Internet infrastructure",
      "actor": null,
      "timeframe": "Nov. 14-24, 2023",
      "sortDate": "2023-11-14",
      "disclosedDate": "2024-02-01",
      "status": "historical",
      "entryPath": "An access token and three service-account credentials stolen during the Okta incident remained valid.",
      "earliestControlFailure": "The credentials were not rotated because they were mistakenly believed to be unused.",
      "stages": [
        "service-token use",
        "reconnaissance",
        "persistence",
        "source-code access"
      ],
      "impact": "The actor gained limited access to an internal wiki, bug database, and source-code management. Cloudflare reported no impact to its global network or customer data.",
      "networkAssessment": {
        "fit": "no-material-impact",
        "signals": [],
        "decisionPoint": "Service and machine credential use",
        "analysis": "A mobile-network signal would not materially change the use of valid service tokens and machine credentials.",
        "caveat": "Complete credential rotation, machine-identity governance, segmentation, least privilege, and persistence detection are the relevant controls.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "Thanksgiving 2023 Security Incident",
          "publisher": "Cloudflare",
          "published": "2024-02-01",
          "url": "https://blog.cloudflare.com/thanksgiving-2023-security-incident/",
          "role": "primary"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "medium",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "caesars-vendor-social-engineering-2023",
      "type": "incident",
      "title": "Caesars breach through an outsourced support vendor",
      "subject": "Caesars Entertainment",
      "sector": "Hospitality and gaming",
      "actor": null,
      "timeframe": "Sept. 2023",
      "sortDate": "2023-09-07",
      "disclosedDate": "2023-09-14",
      "status": "historical",
      "entryPath": "The company reported a social-engineering attack against an outsourced IT support vendor.",
      "earliestControlFailure": "The public filing does not disclose the exact identity, recovery, phone, or access-control path.",
      "stages": [
        "third-party access",
        "data acquisition"
      ],
      "impact": "A loyalty-program database containing sensitive personal information was copied.",
      "networkAssessment": {
        "fit": "unknown",
        "signals": [],
        "decisionPoint": "Vendor help desk, factor enrollment, or recovery if later evidence supports that path",
        "analysis": "Network signals could matter if the attack targeted a phone-based recovery or verification workflow. The cited primary source does not establish that, so assigning a specific API would be speculation.",
        "caveat": "Vendor identity controls, phishing-resistant admin authentication, help-desk verification, least privilege, and contractual security controls are the defensible conclusions.",
        "confidence": "low"
      },
      "sources": [
        {
          "title": "Caesars Entertainment Form 8-K",
          "publisher": "U.S. Securities and Exchange Commission",
          "published": "2023-09-14",
          "url": "https://www.sec.gov/Archives/edgar/data/1590895/000119312523235015/d537840d8k.htm",
          "role": "regulatory-filing"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "medium",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "mgm-resorts-2023",
      "type": "incident",
      "title": "MGM Resorts operational disruption and data exposure",
      "subject": "MGM Resorts International",
      "sector": "Hospitality and gaming",
      "actor": null,
      "timeframe": "Sept. 2023",
      "sortDate": "2023-09-10",
      "disclosedDate": "2023-09-12",
      "status": "historical",
      "entryPath": "Not disclosed in the cited primary filing.",
      "earliestControlFailure": "The company disclosed unauthorized access and operational disruption but did not identify the initial vector in the cited source.",
      "stages": [
        "unknown initial access",
        "system shutdown",
        "recovery"
      ],
      "impact": "The incident caused operational disruption, customer-data exposure, revenue impact, and remediation costs.",
      "networkAssessment": {
        "fit": "unknown",
        "signals": [],
        "decisionPoint": "Unknown",
        "analysis": "A responsible assessment cannot map a Network API to a widely repeated attack story when the cited primary source does not establish the entry path.",
        "caveat": "Revisit the record if MGM, a regulator, law enforcement, or a directly involved responder publishes evidence of the initial vector.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "MGM Resorts International Incident Statement",
          "publisher": "U.S. Securities and Exchange Commission",
          "published": "2023-09-12",
          "url": "https://www.sec.gov/Archives/edgar/data/789570/000119312523233855/d502352dex991.htm",
          "role": "regulatory-filing"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "low",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "shinyhunters-saas-vishing-2026",
      "type": "campaign",
      "title": "ShinyHunters-branded SaaS vishing and data theft",
      "subject": "Multiple SaaS customers",
      "sector": "Cross-sector",
      "actor": "ShinyHunters-branded threat activity",
      "timeframe": "Observed Jan. 2026-present",
      "sortDate": "2026-01-30",
      "disclosedDate": "2026-01-30",
      "status": "active",
      "entryPath": "Voice phishing and victim-branded credential harvesting obtained SSO credentials and MFA codes, then enabled unauthorized device enrollment.",
      "earliestControlFailure": "Social engineering bypassed identity checks and let the attacker register a device or session under the victim's account.",
      "stages": [
        "vishing",
        "authentication",
        "factor enrollment",
        "SaaS access",
        "data export"
      ],
      "impact": "The activity has supported ongoing SaaS data theft and extortion across victim organizations.",
      "networkAssessment": {
        "fit": "supporting",
        "signals": [
          "Scam Signals",
          "Call State",
          "Device Swap",
          "Number Verification"
        ],
        "decisionPoint": "Live vishing, factor enrollment, or sensitive export",
        "analysis": "Call-state or scam signals could add risk context during a live social-engineering event. Device and number signals could strengthen enrollment. Availability, privacy, operator coverage, and the exact application policy must be verified.",
        "caveat": "Phishing-resistant MFA, help-desk controls, device-bound sessions, OAuth monitoring, and export controls remain primary. SIM Swap is irrelevant unless a SIM change actually occurred.",
        "confidence": "medium"
      },
      "sources": [
        {
          "title": "Defending Against ShinyHunters-Branded Cybercrime Targeting SaaS Applications",
          "publisher": "Google Cloud Mandiant",
          "published": "2026-01-30",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/defense-against-shinyhunters-cybercrime-saas/",
          "role": "threat-research"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "dprk-remote-it-workers",
      "type": "campaign",
      "title": "DPRK remote IT-worker infiltration",
      "subject": "U.S. and international employers",
      "sector": "Technology and cross-sector employers",
      "actor": "North Korean remote IT-worker networks and facilitators",
      "timeframe": "Observed 2021-present",
      "sortDate": "2026-04-15",
      "disclosedDate": "2022-05-16",
      "status": "active",
      "entryPath": "Workers used stolen or false identities to obtain legitimate remote jobs. U.S.-based laptop farms, remote KVM access, proxy infrastructure, shell companies, and payment accounts made overseas operators appear local.",
      "earliestControlFailure": "Hiring and onboarding processes accepted a false worker identity and then granted normal employee access to company devices, source code, and sensitive systems.",
      "stages": [
        "identity proofing",
        "remote hiring",
        "legitimate employee access",
        "data and source-code access",
        "exfiltration",
        "extortion or theft"
      ],
      "impact": "DOJ cases describe more than 100 U.S. companies affected in one multi-year scheme, at least 80 stolen identities, more than $5 million in illicit revenue, and access to sensitive source code and export-controlled data. A separate DOJ indictment alleges virtual-currency thefts exceeding $900,000. FBI also reports proprietary-data theft and extortion after workers were discovered.",
      "networkAssessment": {
        "fit": "supporting",
        "signals": [
          "KYC Match",
          "Number Verification",
          "Number Tenure",
          "Location Verification"
        ],
        "decisionPoint": "Remote hiring, onboarding, and periodic identity re-proofing",
        "analysis": "Subscriber and number data could flag an identity mismatch, a reused number, an implausible tenure, or a location inconsistency when an eligible mobile number is part of the proofing flow. It is a supporting signal, not proof that the person behind a remote session is the claimed worker.",
        "caveat": "Laptop farms are designed to make company-device and U.S. network-location signals look normal. Stronger controls include robust or in-person identity verification, staffing-vendor audits, device-shipment controls, KVM and remote-access detection, least privilege, repository and export monitoring, payment reconciliation, and recurring re-verification.",
        "confidence": "medium"
      },
      "sources": [
        {
          "title": "North Korean IT Workers Conducting Data Extortion",
          "publisher": "FBI Internet Crime Complaint Center",
          "published": "2025-01-23",
          "url": "https://www.ic3.gov/PSA/2025/PSA250123",
          "role": "government-advisory"
        },
        {
          "title": "Two U.S. Nationals Sentenced for Facilitating Fraudulent Remote IT Worker Scheme",
          "publisher": "U.S. Department of Justice",
          "published": "2026-04-15",
          "url": "https://www.justice.gov/opa/pr/two-us-nationals-sentenced-facilitating-fraudulent-remote-information-technology-worker",
          "role": "court-and-law-enforcement"
        },
        {
          "title": "Coordinated Nationwide Actions to Combat North Korean Remote IT Workers",
          "publisher": "U.S. Department of Justice",
          "published": "2025-06-30",
          "url": "https://www.justice.gov/opa/pr/justice-department-announces-coordinated-nationwide-actions-combat-north-korean-remote",
          "role": "court-and-law-enforcement"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "scattered-spider-social-engineering",
      "type": "campaign",
      "title": "Scattered Spider help-desk and identity attacks",
      "subject": "Large enterprises across multiple sectors",
      "sector": "Cross-sector",
      "actor": "Scattered Spider",
      "timeframe": "Observed 2022-present",
      "sortDate": "2025-08-01",
      "disclosedDate": "2023-11-16",
      "status": "active",
      "entryPath": "The group has impersonated IT or help-desk staff through calls and messages, stolen one-time codes, used MFA fatigue, persuaded users to install remote-access tools, and carried out SIM swaps.",
      "earliestControlFailure": "Human verification and recovery workflows accepted attacker-controlled communication, approvals, factors, or devices.",
      "stages": [
        "social engineering",
        "factor recovery",
        "authentication",
        "remote access",
        "data theft",
        "extortion"
      ],
      "impact": "The campaign has enabled data theft, extortion, and ransomware activity across numerous victim networks.",
      "networkAssessment": {
        "fit": "supporting",
        "signals": [
          "SIM Swap",
          "SIM Swap Subscription",
          "Scam Signals",
          "Call State"
        ],
        "decisionPoint": "Phone-based recovery, factor reset, or a high-risk action during a live call",
        "analysis": "For the documented SIM-swap branch, a recent-SIM-change signal can directly stop or delay recovery. Call-state or scam signals could support a broader fraud policy during vishing. The campaign uses several routes, so no one network signal covers it.",
        "caveat": "Network signals do not stop a user from sharing a code or installing remote-access software. Phishing-resistant MFA, hardened help-desk verification, device-bound access, admin separation, and behavioral detection remain primary.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "Scattered Spider Joint Cybersecurity Advisory",
          "publisher": "CISA, FBI, and international partners",
          "published": "2025-08",
          "url": "https://www.cisa.gov/sites/default/files/2025-08/aa23-320a-scattered-spider-508c.pdf",
          "role": "government-advisory"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "salt-typhoon-network-espionage",
      "type": "campaign",
      "title": "Salt Typhoon global network espionage",
      "subject": "Telecommunications, government, transportation, lodging, and military infrastructure",
      "sector": "Communications and critical infrastructure",
      "actor": "PRC state-sponsored actors commonly tracked as Salt Typhoon and overlapping groups",
      "timeframe": "Observed 2021-present",
      "sortDate": "2025-09-03",
      "disclosedDate": "2024-12-04",
      "status": "active",
      "entryPath": "Government investigators describe exploitation of known vulnerabilities and avoidable weaknesses in backbone, provider-edge, and customer-edge routers, followed by use of trusted connections and modified network devices for persistence and collection.",
      "earliestControlFailure": "Internet-facing network infrastructure remained exploitable or insufficiently monitored, allowing compromise below the application identity layer.",
      "stages": [
        "edge-device exploitation",
        "router modification",
        "trusted-connection pivoting",
        "long-term persistence",
        "espionage"
      ],
      "impact": "The campaign compromised networks globally and created long-term access that could support collection of communications and movement data.",
      "networkAssessment": {
        "fit": "no-material-impact",
        "signals": [],
        "decisionPoint": "Network infrastructure administration and router integrity",
        "analysis": "Application-facing Network APIs expose selected carrier signals to business applications. They are not a security control for a carrier's own routers, management plane, trusted interconnects, or firmware integrity.",
        "caveat": "Patch exposed infrastructure, retire unsupported equipment, require phishing-resistant administrator access, harden management planes, validate firmware and configuration integrity, segment trusted links, centralize logs, and hunt for persistence.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "Countering Chinese State-Sponsored Actors' Compromise of Networks Worldwide",
          "publisher": "CISA and international partners",
          "published": "2025-09-03",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-239a",
          "role": "government-advisory"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "high",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "volt-typhoon-critical-infrastructure",
      "type": "campaign",
      "title": "Volt Typhoon pre-positioning in critical infrastructure",
      "subject": "U.S. critical infrastructure organizations",
      "sector": "Critical infrastructure",
      "actor": "Volt Typhoon",
      "timeframe": "Observed 2021-present",
      "sortDate": "2024-02-07",
      "disclosedDate": "2023-05-24",
      "status": "monitoring",
      "entryPath": "The actor has used known vulnerabilities, valid accounts, and compromised small-office or edge devices, then relied on built-in administration tools to blend into normal network activity.",
      "earliestControlFailure": "Exposed devices, weak credential control, and limited telemetry allowed quiet access and long-term persistence.",
      "stages": [
        "edge-device access",
        "valid-account use",
        "living off the land",
        "lateral movement",
        "long-term persistence"
      ],
      "impact": "U.S. agencies assess that the actor sought to pre-position on critical-infrastructure networks for potential disruption during a major crisis or conflict.",
      "networkAssessment": {
        "fit": "no-material-impact",
        "signals": [],
        "decisionPoint": "Edge security, privileged administration, and internal persistence",
        "analysis": "The documented campaign is centered on infrastructure vulnerabilities, valid accounts, and low-noise persistence. A mobile subscriber signal does not close those paths.",
        "caveat": "Asset inventory, patching, strong privileged authentication, credential rotation, segmentation, detailed logging, and living-off-the-land threat hunting are the relevant controls.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical Infrastructure",
          "publisher": "CISA, NSA, FBI, and international partners",
          "published": "2024-02-07",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a",
          "role": "government-advisory"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "medium",
      "lastReviewed": "2026-07-16"
    },
    {
      "id": "clop-moveit-2023",
      "type": "campaign",
      "title": "CL0P mass exploitation of MOVEit Transfer",
      "subject": "Organizations running exposed MOVEit Transfer systems",
      "sector": "Cross-sector",
      "actor": "CL0P ransomware group",
      "timeframe": "May-June 2023",
      "sortDate": "2023-06-07",
      "disclosedDate": "2023-05-31",
      "status": "historical",
      "entryPath": "The group exploited CVE-2023-34362, an unauthenticated SQL-injection vulnerability in Internet-exposed MOVEit Transfer systems.",
      "earliestControlFailure": "A vulnerable public-facing file-transfer application could be exploited before any user authentication decision occurred.",
      "stages": [
        "public-facing application exploitation",
        "web-shell deployment",
        "database access",
        "data theft",
        "extortion"
      ],
      "impact": "The campaign enabled data theft and extortion across a large number of organizations and downstream customers using the affected software.",
      "networkAssessment": {
        "fit": "no-material-impact",
        "signals": [],
        "decisionPoint": "Public application exposure and vulnerability management",
        "analysis": "The exploit did not depend on a phone number, subscriber identity, or legitimate user session. A Network API would not have changed the initial access path.",
        "caveat": "Rapid patching, exposure inventory, virtual patching where necessary, application monitoring, data-flow controls, and third-party concentration-risk management are the relevant defenses.",
        "confidence": "high"
      },
      "sources": [
        {
          "title": "CL0P Ransomware Gang Exploits MOVEit Vulnerability",
          "publisher": "CISA and FBI",
          "published": "2023-06-07",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a",
          "role": "government-advisory"
        }
      ],
      "sourceConfidence": "high",
      "contentPriority": "medium",
      "lastReviewed": "2026-07-16"
    }
  ]
};
