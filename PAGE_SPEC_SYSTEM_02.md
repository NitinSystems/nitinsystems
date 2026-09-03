# 📄 NITIN SYSTEMS — PAGE SPECIFICATION: SYSTEM 02 (`system-lead-intake.html`)
> **Document Status:** FROZEN & LOCKED (Lead Intake & Duplicate Verification System)

---

## 🔵 CLASSIFICATION & STACK
- **Classification:** `SELF-INITIATED SYSTEM DESIGN · SYSTEM 02`
- **Status Subtitle:** `System Built · Documentation & Case Study In Progress`
- **Verified Stack:** `Make Webhook · Make.com · Airtable · HubSpot · Gmail / Outlook`
- **Scenario Count:** `Make.com (2 Scenarios)` (Scenario 1: New Lead Intake; Scenario 2: Existing Record Update).

---

## ⚙️ CORE SYSTEM LOGIC
- **Duplicate Prevention & Existing Record Update:** When an existing contact submits again, system identifies existing record and updates it rather than creating duplicate CRM entries.
- **Selective CRM Data Synchronization:** Airtable retains broader intake dataset; only relevant customer and sales fields are synchronized into HubSpot CRM.
