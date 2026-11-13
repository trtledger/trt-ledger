// Generated from data.json by checker/check_prices.py — edit data.json, not this file.
window.TRT_DATA = {
  "buttondownUsername": "trtledger",
  "updated": "2026-11-11",
  "clinics": [
    {
      "id": "henry-meds",
      "name": "Henry Meds",
      "url": "https://henrymeds.com",
      "sourceUrl": "https://henrymeds.com/terms-of-service/programs",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 129,
      "intakeFee": null,
      "labsIncluded": true,
      "labFee": 0,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "cream",
        "oral",
        "enclomiphene"
      ],
      "aiIncluded": true,
      "hcg": "Not listed",
      "commitment": "No commitment listed",
      "states": "Not listed on pricing page",
      "highlights": [
        "Up to 1,000 mg test cypionate per 28 days + injection kit",
        "Anastrozole (AI) included",
        "Oral Kyzatrex option at $179/mo (not in CA)",
        "Compounded pharmacy fulfillment"
      ],
      "watchOuts": [
        "States served not on pricing page",
        "Intake fee not confirmed; no intake amount is included in this estimate"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "Testosterone Replacement Therapy.{0,400}?\\$(\\d+(?:\\.\\d\\d)?) per month"
        }
      ],
      "priceByForm": {
        "oral": 179
      }
    },
    {
      "id": "trt-nation",
      "name": "TRT Nation",
      "url": "https://trtnation.com",
      "sourceUrl": "https://trtnation.com",
      "checked": "2026-11-09",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 99,
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection"
      ],
      "aiIncluded": null,
      "hcg": "Not listed",
      "commitment": "Cancellation policy linked, terms not shown",
      "states": "All except AL, AK, AR, MO, ND, HI",
      "highlights": [
        "Meds, supplies and FedEx shipping included",
        "Bring your own labs (up to 6 months old)",
        "10% off first treatment"
      ],
      "watchOuts": [
        "Labs extra or bring your own; lab price not published",
        "Must be 24+",
        "Some testimonials on the site look unreliable"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "Testosterone Replacement Therapy \\$(\\d+)/mo"
        }
      ]
    },
    {
      "id": "defy-medical",
      "name": "Defy Medical",
      "url": "https://www.defymedical.com",
      "sourceUrl": "https://www.defymedical.com/faq/how-much-does-trt-cost-with-defy-medical/",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Pay per service",
      "monthly": null,
      "monthlyLabel": "~$175 avg",
      "intakeFee": null,
      "labsIncluded": true,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": 2100,
      "forms": [],
      "aiIncluded": true,
      "hcg": "Not listed",
      "commitment": "No subscription or contract",
      "states": "Not listed on pricing page",
      "highlights": [
        "No monthly membership fee",
        "Clinic's own average: under $175/mo year 1, ~$125/mo after",
        "Average includes testosterone, weekly AI, labs and consults"
      ],
      "watchOuts": [
        "Averages are illustrative; your cost depends on protocol"
      ],
      "watch": [
        {
          "field": "clinicYear1Estimate",
          "pattern": "under \\$(\\d+) per month for the first year",
          "multiply": 12
        },
        {
          "field": "ongoingMonthly",
          "pattern": "around \\$(\\d+) per month"
        }
      ],
      "ongoingMonthly": 125
    },
    {
      "id": "fountain-trt",
      "name": "Fountain TRT",
      "url": "https://www.fountaintrt.com",
      "sourceUrl": "https://www.fountaintrt.com",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 199,
      "intakeFee": null,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection"
      ],
      "aiIncluded": null,
      "hcg": "Not listed",
      "commitment": "Cancel anytime",
      "states": "AL, AZ, CA, CO, CT, FL, GA, IL, IN, MI, NJ, NY, NC, OH, PA, TN, TX, VA, WA, WI",
      "highlights": [
        "\"As low as $199/mo, all inclusive\"",
        "Medication, video visits, ongoing support",
        "Follow-ups every 3–6 months"
      ],
      "watchOuts": [
        "Unclear whether partner-lab fees are covered",
        "Only 20 states",
        "Intake fee not confirmed; no intake amount is included in this estimate"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "as low as \\$(\\d+) per month"
        }
      ]
    },
    {
      "id": "hone-health",
      "name": "Hone Health",
      "url": "https://honehealth.com",
      "sourceUrl": "https://honehealth.com",
      "checked": "2026-11-09",
      "verified": true,
      "model": "Membership + meds",
      "monthly": 155,
      "intakeFee": 90,
      "labsIncluded": true,
      "labFee": 0,
      "medsIncluded": false,
      "clinicYear1Estimate": null,
      "forms": [],
      "aiIncluded": null,
      "hcg": "Not listed",
      "commitment": "No commitment, cancel anytime",
      "states": "Not listed",
      "highlights": [
        "Premium membership $155/month, medication extra",
        "$65 initial panel plus $25 confirmatory panel when TRT is considered",
        "Repeat labs included with Premium membership"
      ],
      "watchOuts": [
        "Medication price is not published; the calculator uses your medication assumption",
        "Startup cost includes both the initial and TRT confirmatory panels"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "\\$(\\d+) ?/month plus cost of medication",
          "pick": "max"
        }
      ],
      "additionalSourceUrls": [
        "https://help.honehealth.com/hc/en-us/articles/40162286881431-Men-s-Lab-Schedule-on-the-Premium-Plan"
      ]
    },
    {
      "id": "marek-health",
      "name": "Marek Health",
      "url": "https://marekhealth.com",
      "sourceUrl": "https://marekhealth.com",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Pay as you go",
      "monthly": null,
      "monthlyLabel": "$80–200 treatment",
      "intakeFee": 299,
      "labsIncluded": false,
      "labFee": 450,
      "medsIncluded": false,
      "clinicYear1Estimate": 1599,
      "forms": [],
      "aiIncluded": null,
      "hcg": "Not listed",
      "commitment": "No subscription",
      "states": "Not listed",
      "highlights": [
        "45-min health coach session + provider exam in intake",
        "Deep lab panels (from $450)",
        "HSA/FSA commonly used"
      ],
      "watchOuts": [
        "Highest upfront cost ($299 + $450 labs)",
        "Doesn't bill insurance"
      ],
      "watch": [
        {
          "field": "intakeFee",
          "pattern": "\\$(\\d+) to get started"
        },
        {
          "field": "clinicYear1Estimate",
          "pattern": "Year 1 avg\\. spend\\*? ~\\$\\d+ ?/mo ~\\$([\\d,]+) annual"
        },
        {
          "field": "ongoingMonthly",
          "pattern": "Year 2\\+ avg\\. spend\\*? ~\\$(\\d+) ?/mo"
        }
      ],
      "ongoingMonthly": 70
    },
    {
      "id": "peter-md",
      "name": "PeterMD",
      "url": "https://www.getpetermd.com",
      "sourceUrl": "https://www.getpetermd.com/mens-trt/",
      "checked": "2026-11-09",
      "verified": true,
      "model": "Prepaid plan",
      "monthly": 79,
      "prepaid": 948,
      "intakeFee": 0,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "enclomiphene"
      ],
      "aiIncluded": null,
      "hcg": "Add-on, $301 per 10,000 IU vial",
      "commitment": "$79/mo needs 12-month prepay ($948); $109/mo on 6 months; $139/mo month-to-month",
      "states": "All except AL, ID",
      "highlights": [
        "Medications and free shipping included",
        "Unlimited provider access, 90-day check-in",
        "Labs at Quest, or use recent bloodwork",
        "HSA/FSA eligible; 20% price-match offer"
      ],
      "watchOuts": [
        "Cheapest price is paid upfront for 12 months",
        "Prepaid plans roll into monthly billing — read the auto-bill policy",
        "Unclear whether lab fees are included"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "\\$(\\d+)/ ?Month 12-Month Plan"
        },
        {
          "field": "prepaid",
          "pattern": "12-Month Plan[^$]{0,40}\\$\\d+ Yearly Savings \\$([\\d,]+) total"
        }
      ]
    },
    {
      "id": "fridays",
      "name": "Fridays",
      "url": "https://www.joinfridays.com",
      "sourceUrl": "https://www.joinfridays.com/testosterone",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 129,
      "intakeFee": null,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": null,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "oral",
        "enclomiphene"
      ],
      "aiIncluded": null,
      "hcg": "Not listed",
      "commitment": "No commitments, cancel anytime",
      "states": "Not listed",
      "highlights": [
        "Injectable or oral testosterone from $129/mo",
        "Free baseline labs at Quest or Labcorp",
        "Anastrozole is described on the page as co-administered 'when necessary'; the page doesn't say it's included in the price",
        "Free shipping"
      ],
      "watchOuts": [
        "Follow-up labs at 1 and 3 months, then quarterly — cost not stated",
        "\"From\" price; unclear if meds are included",
        "Intake fee not confirmed; no intake amount is included in this estimate",
        "Page doesn't say whether anastrozole is included in the price"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "From \\$(\\d+) ?/mo",
          "pick": "min"
        }
      ]
    },
    {
      "id": "nuform-health",
      "name": "Nuform Health",
      "url": "https://nuformhealth.com",
      "sourceUrl": "https://www.nuformhealth.com/trt",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Prepaid kits",
      "monthly": 50,
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "enclomiphene"
      ],
      "aiIncluded": null,
      "hcg": "Offered as a 1-month injectable kit, testosterone plus hCG/gonadorelin, for $120/month (dosed at 200mg weekly, includes supplies).",
      "commitment": "Prepaid 4-month ($200) or 5-month ($295) kits; no monthly subscriptions",
      "states": "Not listed",
      "highlights": [
        "4-month injectable kit $200 ($50/month), includes medication and supplies",
        "5-month kit $295 ($59/mo)",
        "SubQ or IM, and micro-dosing, at the same price",
        "Testosterone + hCG/gonadorelin kit $120/month",
        "Lab panels sold on their own diagnostic-labs page: Male Essential $95, Comprehensive $195 (Quest draw plus analysis fee)"
      ],
      "watchOuts": [
        "The low per-month price requires prepaying 4 to 5 months",
        "Kits have a fixed dose of 200mg weekly",
        "Labs are priced separately ($95 or $195 on the /diagnostic-labs page); the TRT page does not say labs are included",
        "No anastrozole, intake fee or states listed",
        "Enclomiphene is offered on a separate plan page; its price was not checked"
      ],
      "prepaid": 200,
      "watch": [
        {
          "field": "monthly",
          "pattern": "4 Month Injectable Kit[^$]{0,80}\\$ ?\\d+ \\(\\$(\\d+)/ ?month\\)"
        },
        {
          "field": "prepaid",
          "pattern": "4 Month Injectable Kit[^$]{0,80}\\$ ?(\\d+) \\(\\$\\d+/ ?month\\)"
        }
      ]
    },
    {
      "id": "feel30",
      "name": "Feel30",
      "url": "https://feel30.com",
      "sourceUrl": "https://feel30.com/product/injectable-testosterone-cypionate",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Prepaid plan",
      "monthly": 149,
      "intakeFee": 0,
      "labsIncluded": true,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "enclomiphene"
      ],
      "aiIncluded": null,
      "hcg": "Not mentioned on the TRT product page",
      "commitment": "The product page shows only a 'starting at' $149/mo price (checked Nov 13, 2026). On Nov 9 it listed $149/mo on a 12-month prepaid plan ($1,788), $189/mo on 6 months and $229/mo month-to-month; those terms are no longer shown. Confirm the term and total with Feel30 before you pay",
      "states": "Not listed",
      "highlights": [
        "Testosterone cypionate injections 'starting at' $149/mo",
        "Page says bloodwork, medication, doctor consults and shipping are included ('All-Inclusive Price No upsells. No hidden fees')",
        "At-home nurse visit or in-clinic lab option; vitamin D biomarker included",
        "Free 24-48hr shipping; 100% refundable if not eligible",
        "Guarantee of 10% total-testosterone increase for first-time patients or medication is free"
      ],
      "watchOuts": [
        "Term prices aren't on the public page now. When last shown (Nov 9, 2026), $149/mo needed $1,788 paid upfront for 12 months and the month-to-month price was $229",
        "A struck-through $399.99 appears next to the $149 price; the page doesn't say what plan that price was for",
        "No anastrozole (estrogen blocker) or hCG mentioned",
        "States served not listed",
        "The injectable page also mentions Sermorelin and 'Oral TRT', and says 'no labs or appointments needed' while listing lab work as included"
      ],
      "prepaid": 1788,
      "watch": [
        {
          "field": "monthly",
          "pattern": "Total Price \\$ ?(\\d+) ?/mo"
        }
      ]
    },
    {
      "id": "rex-md",
      "name": "Rex MD",
      "url": "https://www.rexmd.com",
      "sourceUrl": "https://rexmd.com/our-medications/testosterone-program/",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 250,
      "intakeFee": 99,
      "labsIncluded": true,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "cream",
        "oral"
      ],
      "aiIncluded": null,
      "hcg": "Not mentioned",
      "commitment": "Monthly subscription with quarterly shipments; minimum term and cancellation terms not stated",
      "states": "Not listed",
      "highlights": [
        "$99 one-time initial fee includes a lab panel and a video consultation",
        "$250 to $299/month includes medication, ongoing lab tests and at least one video consult per year",
        "Options include testosterone cypionate injection, testosterone gel, Clomid tablets and sermorelin"
      ],
      "watchOuts": [
        "$250 is the floor; some medications cost up to $299/month",
        "Shipments are quarterly",
        "Labs required 90 days after start, then every six months",
        "No anastrozole, hCG or states listed"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "as low as \\$(\\d+) per month"
        }
      ]
    },
    {
      "id": "male-excel",
      "name": "Male Excel",
      "url": "https://maleexcel.com",
      "sourceUrl": "https://maleexcel.com/treatments/hrt-costs/",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Membership + meds",
      "monthly": 161.5,
      "intakeFee": 99,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "cream",
        "oral"
      ],
      "aiIncluded": null,
      "hcg": "Not mentioned",
      "commitment": "Cancel anytime; the required membership is $99/mo paid monthly or $79/mo on an annual plan paid upfront",
      "states": "Not listed",
      "highlights": [
        "Injectable testosterone from $62.50/mo plus required Proactive Healthcare Membership $99/mo paid monthly (= $161.50/mo); $79/mo if the annual plan is paid upfront",
        "$99 one-time at-home hormone test, lab analysis and online consultation",
        "Topical testosterone from $90/month; enclomiphene from $75/month",
        "Comprehensive lab tests every 6 months and symptom assessments every 60 days are part of the membership; FSA/HSA eligible"
      ],
      "watchOuts": [
        "The required membership adds $99/month ($79/month only if the annual plan is paid upfront)",
        "Injection kit is billed separately",
        "Medication price varies with dose; 'from' prices shown",
        "$99 one-time test and consultation is charged before treatment is prescribed"
      ],
      "watch": [
        {
          "field": "medPrice",
          "pattern": "Testosterone cypionate injections From \\$([\\d.]+) /month"
        }
      ],
      "medPrice": 62.5
    },
    {
      "id": "viking-alternative-medicine",
      "name": "Viking Alternative Medicine",
      "url": "https://vikingalternative.com",
      "sourceUrl": "https://vikingalternative.com/pricing/",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 100,
      "intakeFee": null,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": null,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "enclomiphene"
      ],
      "aiIncluded": null,
      "hcg": "Offered: 'Testosterone with or without HCG' packages (pricing not itemized)",
      "commitment": "Not stated; $25.00 charge for missed appointments without prior cancellation",
      "states": "All except AL, HI, MS (47 states via telemed)",
      "highlights": [
        "Pricing page gives a range: most patients pay $100-$150 a month (men and women)",
        "Exact cost depends on labs, protocol and treatment plan",
        "States 'No hidden fees, no insurance games'",
        "Telemed in 47 states; labs drawn at a local lab, meds shipped",
        "HRT packages with or without HCG; enclomiphene page also on site"
      ],
      "watchOuts": [
        "Price is a range: most patients pay $100–150/month depending on labs and protocol",
        "Only a range ($100-$150/mo) is published, not a fixed plan price; $100 used as the low end",
        "Pricing page does not say what is included (labs, meds, consults, AI) or list lab/intake fees",
        "$25 missed-appointment fee",
        "Intake fee not confirmed; no intake amount is included in this estimate"
      ],
      "monthlyLabel": "$100–150/mo",
      "watch": [
        {
          "field": "monthly",
          "pattern": "Most Viking patients pay \\$(\\d+)"
        }
      ]
    },
    {
      "id": "bodylogicmd",
      "name": "BodyLogicMD",
      "url": "https://www.bodylogicmd.com",
      "sourceUrl": "https://www.bodylogicmd.com/pricing",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Membership + meds",
      "monthly": 79,
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": null,
      "medsIncluded": false,
      "clinicYear1Estimate": null,
      "forms": [],
      "aiIncluded": null,
      "hcg": "Not mentioned",
      "commitment": "Month-to-month membership, cancel anytime, no long-term contracts",
      "states": "Not listed (network of ~60 clinic locations plus telehealth)",
      "highlights": [
        "BodyLogicMD Advantage membership $79/month",
        "Membership gives member pricing on hormone panels and treatments (BHRT)",
        "In-person or telehealth consults",
        "Cancel anytime, no insurance required"
      ],
      "watchOuts": [
        "$79/month is a membership fee only: hormone panels and treatments are billed separately at undisclosed 'member pricing'",
        "Pricing page is marketed to women (perimenopause/menopause BHRT); no men's TRT-specific price shown",
        "Consult, lab and medication costs not published",
        "Testosterone delivery forms not specified on the pricing page"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "For \\$(\\d+)/month, BodyLogicMD"
        }
      ]
    },
    {
      "id": "gameday-telehealth",
      "name": "Gameday Men's Health (telehealth)",
      "url": "https://gamedaymenshealth.com",
      "sourceUrl": "https://gamedaymenshealth.com/service/testosterone-replacement-therapy",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Flat monthly",
      "monthly": 199,
      "intakeFee": null,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": null,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "enclomiphene",
        "oral"
      ],
      "aiIncluded": null,
      "hcg": "Not priced; HCG mentioned only as a blog topic",
      "commitment": "Not stated (telehealth page says 'Terms and restrictions may apply')",
      "states": "FL",
      "highlights": [
        "Testosterone Cypionate Injections, Testosterone Pellets and Clomid / Enclomiphene each listed at $199/mo on the TRT service page",
        "Oral TRT (Kyzatrex) offered, with no price shown",
        "Telehealth FAQ: 'Telemedicine services are currently only available in Florida.'"
      ],
      "watchOuts": [
        "The $199/mo prices are on the general TRT service page, and each card says 'Offered at select clinics'. The telehealth landing page (ldr.gamedaymenshealth.com/telehealth-lp) shows no prices.",
        "Telehealth page disclaimer: 'Prices and services may vary per location and are subject to change without warning.'",
        "The site says medical services are provided by independently owned and operated clinics (a franchise model).",
        "No intake, lab, or what's-included details are published.",
        "join.gamedaymenshealth.com/start-trt-treatment returned 404.",
        "Intake fee not confirmed; no intake amount is included in this estimate"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "Testosterone Cypionate Injections \\$(\\d+)/mo"
        }
      ]
    },
    {
      "id": "trt-kingdom",
      "name": "TRT Kingdom",
      "url": "https://trtkingdom.com",
      "sourceUrl": "https://trtkingdom.com/products/hormone-therapy-testosterone-cypionate-therapy",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Tiered by plan length",
      "monthly": 79,
      "intakeFee": null,
      "labsIncluded": null,
      "labFee": null,
      "medsIncluded": null,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "oral",
        "enclomiphene"
      ],
      "aiIncluded": null,
      "hcg": "Offered; price not listed",
      "commitment": "$79/mo on a 12-month plan; $89/mo on 6 months; $99/mo on a 2.5-month plan",
      "states": "Not listed",
      "highlights": [
        "Lowest price needs a 12-month plan",
        "Testosterone cypionate, oral testosterone and enclomiphene offered"
      ],
      "watchOuts": [
        "Doesn't say whether labs or medication are included in the monthly price",
        "States served not listed"
      ],
      "watch": [
        {
          "field": "monthly",
          "pattern": "\\$\\s*(\\d+)\\s*/mo\\s*12-month plan"
        }
      ]
    },
    {
      "id": "somira-health",
      "name": "Somira Health",
      "url": "https://somirahealth.com",
      "sourceUrl": "https://somirahealth.com/mens-health/",
      "checked": "2026-11-04",
      "verified": true,
      "model": "Pay per plan, no subscription",
      "monthly": 100,
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": 238,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection"
      ],
      "aiIncluded": null,
      "hcg": "Offered (10,000 IU plan); price not listed here",
      "commitment": "$299.99 for 3 months (about $100/mo) or $119.99 for 1 month; not a subscription, refill as needed",
      "states": "Not listed",
      "highlights": [
        "Provider review and ongoing support included",
        "Free shipping",
        "Upload your own labs or buy them through Somira"
      ],
      "watchOuts": [
        "Labs extra: $85 initial panel, $51 per follow-up panel (first year assumes 3 follow-ups = $238)",
        "Prices load in the page's script, so the weekly check can't read them automatically"
      ]
    },
    {
      "id": "talon-wellness",
      "name": "Talon Wellness",
      "url": "https://www.talonwellness.com",
      "sourceUrl": "https://www.talonwellness.com/trt-price-breakdown",
      "checked": "2026-11-13",
      "verified": true,
      "model": "Pay per vial, no membership",
      "monthly": null,
      "monthlyLabel": "$58.97/mo avg",
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": 198,
      "medsIncluded": false,
      "clinicYear1Estimate": 707.6,
      "year1Breakdown": [
        "$320 medication (4 vials × $80)",
        "$198 labs (2 × $99)",
        "$150 consults (2 × $75)",
        "$30 shipping (2 orders × $15; doses over 120 mg/week can order 2 vials at a time)",
        "$9.60 card fee (3% of medication)"
      ],
      "startCost": 271.4,
      "doseRange": {
        "modeledMgPerWeek": 140,
        "low": {
          "mgPerWeek": 100,
          "year1": 640.2
        },
        "high": {
          "mgPerWeek": 200,
          "year1": 887.4
        }
      },
      "forms": [
        "injection"
      ],
      "aiIncluded": null,
      "hcg": "Offered; price not listed",
      "commitment": "No membership or subscription; pay per vial",
      "states": "All 50 states",
      "highlights": [
        "Testosterone cypionate 200 mg/mL, 10 mL vial: $80",
        "No membership or intake fee",
        "Starter injection supplies included",
        "Consult $75 and basic labs $99, each at the start and every 6 months",
        "$15 shipping per order ($30 overnight)",
        "Publishes a full first-year price breakdown on its own site"
      ],
      "watchOuts": [
        "Medication, labs, consults and shipping are paid separately; 3% card fee on medication and supplies",
        "Labs and consults only every 6 months; the $99 panel's tests aren't listed",
        "At 100 mg/week, one vial per order (more shipping); over 120 mg/week, up to 2 vials per order",
        "Extra syringes ($1 per IM set, $5 per 10 SQ), HCG, semaglutide and tirzepatide cost extra; prices not listed",
        "Modeled at 140 mg/week; the clinic's own totals run $640 (100 mg/week) to $887 (200 mg/week)",
        "Start: $75 consult + $99 labs + first $80 vial + $15 shipping + $2.40 card fee"
      ]
    },
    {
      "id": "andronyx",
      "name": "Andronyx",
      "url": "https://andronyx.care",
      "sourceUrl": "https://andronyx.care",
      "checked": "2026-11-13",
      "verified": true,
      "sourceType": "clinic-provided",
      "sourceDate": "2026-11-06",
      "reconfirmBy": "2027-02-04",
      "model": "Flat monthly",
      "monthly": 90,
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": 297,
      "medsIncluded": true,
      "clinicYear1Estimate": 1377,
      "year1Breakdown": [
        "$1,080 membership (12 × $90, includes testosterone)",
        "$81 baseline labs (Goodlabs)",
        "$216 follow-up labs (3 quarterly × $72, Goodlabs)"
      ],
      "startCost": 171,
      "forms": [
        "injection",
        "enclomiphene"
      ],
      "aiIncluded": true,
      "hcg": "Billed at compounding-pharmacy cost plus shipping; price not listed",
      "commitment": "No contract or cancellation fee",
      "states": "FL, TX",
      "additionalSourceUrls": [
        "https://goodlabs.com/p/andronyx-baseline-lab-panel-74a99052",
        "https://goodlabs.com/p/andronyx-reevaluation-c39f3ec7"
      ],
      "highlights": [
        "$90/mo includes compounded injectable testosterone, no dose cap, free shipping",
        "AI (anastrozole) included when clinically needed",
        "Enclomiphene alone (for fertility, without testosterone) included in the $90",
        "No intake fee; consults and provider messaging included",
        "Labs via Goodlabs: $81 baseline, $72 follow-up (CBC, CMP, free/total T, sensitive E2, PSA)"
      ],
      "watchOuts": [
        "Prices are from the clinic's owner in writing (Nov 5–6, 2026), not from its website",
        "Labs extra: quarterly in year one, then every 6–12 months",
        "HCG, enclomiphene with testosterone, and GLP-1s billed at pharmacy cost plus shipping",
        "Syringes not included; the clinic suggests buying 27g ½-inch SQ syringes yourself",
        "Florida and Texas only",
        "Start: $90 first month + $81 baseline labs"
      ]
    },
    {
      "id": "prescribedrx",
      "name": "PrescribedRX",
      "url": "https://prescribedrx.com/testosterone/",
      "sourceUrl": "https://prescribedrx.com/plans/injectable-testosterone/",
      "additionalSourceUrls": [
        "https://prescribedrx.com/plans/health-assessment-trt/",
        "https://prescribedrx.com/plans/trt-cream/"
      ],
      "checked": "2026-11-13",
      "verified": true,
      "model": "Billed every 3 months",
      "monthly": 129,
      "prepaid": 387,
      "intakeFee": 0,
      "labsIncluded": false,
      "labFee": 276,
      "medsIncluded": true,
      "clinicYear1Estimate": null,
      "forms": [
        "injection",
        "cream"
      ],
      "aiIncluded": null,
      "hcg": "Not listed",
      "commitment": "$387 every 3 months ($129/mo); cancel anytime before renewal, no membership or cancellation fee",
      "states": "All except AL, AR, CT, GA, LA, MN, PA, RI",
      "highlights": [
        "$129/mo, billed $387 every 3 months, same price at every dose",
        "Includes testosterone, syringes and supplies, provider follow-ups and free shipping",
        "Injection or compounded cream, same price",
        "Plan is only charged after a provider prescribes"
      ],
      "watchOuts": [
        "Labs extra: $69 hormone panel to start (normally $119) and another $69 panel with each 3-month renewal (first year: 4 panels = $276)",
        "Billed 3 months at a time",
        "Injectable testosterone not available in AL, AR, CT, GA, LA, MN, PA or RI",
        "Start: $69 panel, then $387 for the first 3 months once prescribed"
      ]
    }
  ],
  "inPerson": [
    {
      "id": "ageless",
      "name": "Ageless Men's Health",
      "url": "https://www.agelessmenshealth.com",
      "locatorUrl": "https://www.agelessmenshealth.com/locations/",
      "checked": "2026-11-02",
      "pricing": "Not published",
      "locations": {
        "AZ": 9,
        "CA": 10,
        "CO": 3,
        "FL": 3,
        "GA": 3,
        "ID": 2,
        "IL": 5,
        "IN": 3,
        "IA": 1,
        "MS": 4,
        "NE": 2,
        "NV": 4,
        "NJ": 2,
        "NY": 4,
        "OH": 2,
        "PA": 4,
        "TN": 6,
        "TX": 8,
        "UT": 6,
        "VA": 2,
        "WA": 2
      },
      "statesReported": [],
      "everywhere": false,
      "notes": "85 clinics in 21 states (counted by hand; their site blocks automated checks)"
    },
    {
      "id": "low-t-center",
      "name": "Low T Center",
      "url": "https://lowtcenter.com",
      "locatorUrl": "https://lowtcenter.com/locations/",
      "checked": "2026-11-02",
      "pricing": "$25 first test · $135 confirmation + first shot · ~$105.50/mo injections · $135 follow-ups",
      "pricingSource": "https://lowtcenter.com/cost-of-treatment/",
      "locations": {
        "AR": 2,
        "CO": 3,
        "IL": 3,
        "IN": 2,
        "MO": 1,
        "NC": 1,
        "OH": 3,
        "OK": 2,
        "TN": 6,
        "TX": 36
      },
      "statesReported": [],
      "everywhere": false,
      "notes": "59 U.S. clinics in 10 states"
    },
    {
      "id": "gameday",
      "name": "Gameday Men's Health",
      "url": "https://gamedaymenshealth.com",
      "locatorUrl": "https://gamedaymenshealth.com/location-finder",
      "checked": "2026-11-02",
      "pricing": "Not published · free consult and free T test",
      "locations": {
        "AK": 1,
        "AL": 9,
        "AR": 2,
        "AZ": 16,
        "CA": 70,
        "CO": 11,
        "CT": 9,
        "DE": 1,
        "FL": 30,
        "GA": 16,
        "HI": 1,
        "IA": 3,
        "ID": 5,
        "IL": 11,
        "IN": 8,
        "KS": 4,
        "KY": 5,
        "LA": 4,
        "MA": 12,
        "MD": 6,
        "ME": 1,
        "MI": 10,
        "MN": 4,
        "MO": 6,
        "MT": 4,
        "NC": 14,
        "NE": 1,
        "NH": 3,
        "NJ": 13,
        "NM": 3,
        "NV": 3,
        "NY": 7,
        "OH": 12,
        "OK": 3,
        "OR": 3,
        "PA": 14,
        "RI": 2,
        "SC": 9,
        "SD": 3,
        "TN": 6,
        "TX": 43,
        "UT": 8,
        "VA": 14,
        "WA": 1,
        "WI": 8,
        "WV": 1
      },
      "statesReported": [],
      "everywhere": false,
      "notes": "420 U.S. clinics in 46 states"
    },
    {
      "id": "numale",
      "name": "VidaVital Medical (formerly NuMale)",
      "url": "https://www.vidavitalmedical.com",
      "locatorUrl": "https://www.vidavitalmedical.com/locations/",
      "checked": "2026-11-02",
      "pricing": "Not published",
      "locations": {
        "FL": 1,
        "NE": 1,
        "NM": 1,
        "NV": 1,
        "WI": 1
      },
      "statesReported": [],
      "everywhere": false,
      "notes": "5 U.S. clinics in 5 states"
    },
    {
      "id": "mantality",
      "name": "Mantality Health",
      "url": "https://mantalityhealth.com",
      "locatorUrl": "https://mantalityhealth.com/locations/",
      "checked": "2026-11-02",
      "pricing": "Not published",
      "locations": {
        "IA": 1,
        "MI": 1,
        "MO": 2,
        "NE": 1,
        "OH": 1,
        "WI": 2
      },
      "statesReported": [],
      "everywhere": false,
      "notes": "8 U.S. clinics in 6 states"
    }
  ],
  "noPricing": [
    {
      "name": "Evolve Telemed",
      "url": "https://evolvetelemed.com",
      "note": "Free consult; pricing only after you talk to an intake coordinator",
      "checked": "2026-11-13"
    },
    {
      "name": "Ways2Well",
      "url": "https://ways2well.com",
      "note": "Care-plan tiers include labs; no prices on site. Not in MO, NJ, NY, RI",
      "checked": "2026-11-13"
    },
    {
      "name": "Keeps TRT (formerly Titan)",
      "url": "https://jointitan.com",
      "note": "$49 to start (labs + consult); monthly price only shown inside its sign-up quiz",
      "checked": "2026-11-13"
    },
    {
      "name": "Ehormones MD",
      "url": "https://ehormones.com",
      "note": "Prices not published on its site",
      "checked": "2026-11-03"
    },
    {
      "name": "Huddle Men's Health",
      "url": "https://huddlemenshealth.com",
      "note": "Prices not published; telehealth in CA and WA",
      "checked": "2026-11-03"
    },
    {
      "name": "Cuda Health",
      "url": "https://www.cudahealth.com",
      "note": "Pay per vial, no membership (labs, then a consult); testosterone prices not published on its site",
      "checked": "2026-11-04"
    },
    {
      "name": "Hims",
      "url": "https://www.hims.com/testosterone",
      "note": "Injectable TRT medication starts at $79/month; oral TRT at $179/month. A separate membership is required, but its price is not shown on the public page. A complete first-year cost cannot be verified.",
      "checked": "2026-11-04"
    },
    {
      "name": "Joi + Blokes",
      "url": "https://joiandblokes.com/shop/men/hormone-health/testosterone-replacement-therapy/",
      "note": "The current TRT page describes clinician visits, medication delivery and quarterly labs, but does not display a price. The previous $99/month figure could not be reconfirmed.",
      "checked": "2026-11-04"
    },
    {
      "name": "Maximus",
      "url": "https://www.maximustribe.com/testosterone/Testosterone-Cream",
      "note": "Offers testosterone cream and other treatment options. The current official cream page does not publish plan prices; previous third-party pricing is not used for ranking.",
      "checked": "2026-11-04"
    },
    {
      "name": "H4M Wellness (HormonesForMe)",
      "url": "https://goh4m.com/",
      "note": "Custom wellness plans start at $235 per 3 months, with free consult and onboarding; labs are separate. The page does not establish a complete testosterone-specific cost, so this is not ranked.",
      "checked": "2026-11-04"
    },
    {
      "name": "Ryze HRT",
      "url": "https://www.ryzehrt.com",
      "note": "Online, all 50 states. Men's HRT \"starting as low as $85/month\"; what that includes and lab costs are not published, so no first-year total yet",
      "checked": "2026-11-07"
    },
    {
      "name": "Gatlan Health",
      "url": "https://gatlan.com/mens-health-products/",
      "note": "Testosterone \"as low as $125/mo\", but what that includes, lab costs and states aren't published",
      "checked": "2026-11-11"
    },
    {
      "name": "Thrivelab",
      "url": "https://www.thrivelab.com",
      "note": "Offers compounded TRT and takes some insurance; prices not published on its site",
      "checked": "2026-11-11"
    },
    {
      "name": "Taurus Medical",
      "url": "https://www.taurusmeds.com",
      "note": "Free testosterone test to start; TRT prices not published on its site",
      "checked": "2026-11-11"
    }
  ],
  "labs": [
    {
      "test": "Total testosterone",
      "vendor": "Ulta Lab Tests",
      "lab": "Quest",
      "price": 29.95,
      "fees": 12.95,
      "sourceUrl": "https://www.findlabtest.com/lab-test/hormone-testing/testosterone-total-males-adult-ia-quest-result-code-55036300",
      "checked": "2026-11-13",
      "verified": false,
      "watch": [
        {
          "field": "total",
          "pattern": "\\$([\\d.]+) Order Ulta Lab Tests"
        }
      ]
    },
    {
      "test": "Total testosterone",
      "vendor": "Walk-In Lab",
      "lab": "Quest",
      "price": 59.0,
      "fees": 6.0,
      "sourceUrl": "https://www.walkinlab.com/products/view/testosterone-total-blood-test-male-only",
      "checked": "2026-11-13",
      "verified": true
    },
    {
      "test": "Bioavailable + total testosterone",
      "vendor": "Walk-In Lab",
      "lab": "Quest",
      "price": 139.0,
      "fees": 6.0,
      "sourceUrl": "https://www.walkinlab.com/products/view/testosterone-free-bioavailable-total-blood-test-lc-ms-ms",
      "checked": "2026-11-13",
      "verified": true
    },
    {
      "test": "Free & weakly bound testosterone",
      "vendor": "Walk-In Lab",
      "lab": "LabCorp",
      "price": 139.0,
      "fees": 6.0,
      "sourceUrl": "https://www.walkinlab.com/products/view/testosterone-free-weakly-bound-blood-test",
      "checked": "2026-11-13",
      "verified": true
    }
  ],
  "recentChanges": [
    {
      "date": "2026-11-11",
      "name": "Talon Wellness",
      "field": "clinicYear1Estimate",
      "old": 737.6,
      "new": 707.6,
      "url": "https://www.talonwellness.com/trt-price-breakdown"
    }
  ]
};
