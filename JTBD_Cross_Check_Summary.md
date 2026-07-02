# JTBD Journey Map × Canvas Journey Map — Cross-check Summary

## Sources compared
| Source | Content | Coverage |
|--------|---------|----------|
| **JTBD_Journey_Map.csv** | 9 journey steps with Big/Little/Micro Jobs + Pain Points | Full merchant lifecycle |
| **Canvas Journey A** (IPP Journey.html) | 5 phases, 15 steps, mapped to O1–O10 | Device config journey (merchant) |
| **Canvas Journey B** (IPP Journey.html) | 5 phases, 12 steps, mapped to O4/O8 | Submerchant onboarding (AfP) |
| **JTBD_Opportunities.csv** | 28 opportunities (19 IPP Platform, 9 Online Checkout) | Broader than canvas O1–O10 |

---

## Alignment summary

| JTBD Step | Canvas Phase | Alignment |
|-----------|-------------|-----------|
| 1. Plan | 1 · Exploration | ⚠️ Partial — Canvas only maps O1; JTBD has 13 little jobs |
| 2. Validate / Test | 2 · Test & Integration | ✅ Strong — Pain points validate O3, O7, O10 |
| 3. Scale / Go Live | 3 · Migration to LIVE | ⚠️ Partial — Canvas is richer (★ highest leverage at 3.c); JTBD has no pain points |
| 4. Secure every sale | 4 · BAU (partial) | ✅ Strong — 8 JTBD pain points + 5 canvas opps |
| 5. Ramp up | — Not mapped — | ❌ Gap in both sources |
| 6. Increase shopper retention | — Not mapped — | ❌ Gap — 3 pain points with no canvas counterpart |
| 7. Streamline operations | 4 · BAU (partial) | ⚠️ Partial — XL opps (Android, Anomalies) not in canvas O1-O10 |
| 8. Stay competitive | — Not mapped — | ❌ Gap — 3 pain points, 5 little jobs, no canvas mapping |
| 9. Ensure fleet operational | 4 · BAU + 5 · Replacements | ✅ Strongest — 10 pain points, 5 canvas opps, most evidence |
| — | Journey B (Submerchant) | ❌ Critical gap — 12 steps not in JTBD at all |

---

## Key findings

### 1. Four JTBD steps have no canvas mapping
**Steps 5, 6, 7 (partial), 8** cover Ramp Up, Shopper Retention, Streamline Ops, and Stay Competitive. These represent the post-go-live lifecycle that falls outside the canvas's device-configuration focus. Together they carry:
- 11 little jobs
- 6 pain points
- 4 JTBD opportunities (including 2 XL-sized: Android app flow, Awareness of anomalies)

### 2. Journey B (Submerchant/AfP) is missing from JTBD entirely
The canvas maps 12 steps across 5 phases for submerchant onboarding with strong evidence:
- **Tide**: 200 tickets/month from Wi-Fi passcode alone
- **Munu**: Confusing updates → failed onboardings
- **Fresha**: 4h/day spent on preboarding
- 4 steps marked ★ highest leverage (B4.a–B4.d activation flow)

This needs a dedicated JTBD row with Big/Little/Micro jobs defined.

### 3. Opportunity set mismatch
| Set | Count | Focus |
|-----|-------|-------|
| Canvas (O1–O10) | 10 | Device config, settings, onboarding, API |
| JTBD Opportunities CSV (IPP) | 19 | Broader — includes anomaly awareness, emergency support, loyalty, Android apps |
| JTBD Opportunities CSV (Online Checkout) | 9 | Separate domain — not in canvas |

**9 IPP opportunities from the CSV are not represented in canvas O1–O10:**
- Android app flow (XL)
- Get latest, relevant features/updates (L)
- Increase customer loyalty (L)
- Increase shopper personalized experience (L)
- POS solution scaling
- TIS, TRS for platform merchants
- Awareness of POS payment issues (XL)
- Awareness of anomalies (XL)
- Emergency support

### 4. Pain point distribution is uneven
| JTBD Step | Pain Points | Canvas Opps |
|-----------|-------------|-------------|
| 1. Plan | 0 | 1 |
| 2. Validate/Test | **9** | 3 |
| 3. Scale/Go Live | **0** ← likely under-documented | **5** (★ highest leverage) |
| 4. Secure every sale | **8** | 5 |
| 5. Ramp up | 0 | 0 |
| 6. Shopper retention | 3 | 0 |
| 7. Streamline ops | 0 | shared with Step 4 |
| 8. Stay competitive | 3 | 0 |
| 9. Fleet operational | **10** | 5 |

Step 3 (Go Live) is the highest-leverage canvas moment but has **zero pain points** in the JTBD — this is the most important research gap to close.

### 5. Terminology differences
| JTBD uses | Canvas uses |
|-----------|------------|
| "terminal" | "device" (in some places) |
| "payment features" | "settings" |
| "firmware update strategy" | part of O10 (Terminal action scheduling) |
| No concept | "Override management" (O3) |
| No concept | "Partner-aware configuration" (O6) |

---

## Recommended actions

1. **Add Journey B to JTBD map** — Define Big/Little/Micro Jobs for submerchant onboarding (12 canvas steps already provide the skeleton)
2. **Research pain points for Step 3 (Go Live)** — The highest-leverage canvas moment has zero documented pain points
3. **Map the 9 unmapped JTBD opportunities to canvas** — Especially the 4 XL-sized ones (Android app flow, Awareness of POS issues, Awareness of anomalies, Terminal settings)
4. **Add canvas phases for Steps 5-8** — Ramp Up, Shopper Retention, Streamline Ops, and Stay Competitive need operational journey steps
5. **Align terminology** — Standardize "terminal" vs "device", "payment features" vs "settings" across both artifacts

---

## Output files
- **JTBD_Consolidated.csv** — Full row-by-row merge of JTBD journey + canvas phases + opportunities + gap notes
- **JTBD_Cross_Check_Summary.md** — This document
