// Wobbly Life job-pay data. Every number traces to a cited source; no invented midpoints.
// Primary source: Bloxodes (dated, most recent). Secondary: GamePretty (2021, cited for
// comparison only — flagged where it disagrees with the current Bloxodes figures).

var JOBS = [
  {
    id: "wood-cutting",
    name: "Wood Cutting",
    location: "Lumber Yard, Mountain Island",
    timeLabel: "5 minutes",
    timeMinutesLow: 5,
    timeMinutesHigh: 5,
    payLow: null,
    payHigh: 120,
    payLabel: "Up to $120",
    perMinuteNote: null,
    exact: {
      unit: "tree",
      dollarsPerUnit: 10,
      explain: "Each tree gives 2 planks; each plank delivered is worth $5, so 1 tree = $10."
    },
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"Up to $120 in five minutes.\" \"Every tree gives you two planks, and each plank you deliver is worth $5, so one tree adds up to $10.\""
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Woodcutting Job: Pays $120 ($5 per plank). Takes 1:00-4:00 to complete.\"",
        diff: "Agrees on the $120 cap and $5/plank rate, but gives a 1:00-4:00 time range instead of a flat 5 minutes. This source is from 2021; the timer may have changed since."
      }
    ]
  },
  {
    id: "mining",
    name: "Mining",
    location: "Mine, Mountain Island",
    timeLabel: "4 minutes",
    timeMinutesLow: 4,
    timeMinutesHigh: 4,
    payLow: null,
    payHigh: null,
    payLabel: "Based on gem value; over $100 on a lucky solo run",
    perMinuteNote: "No fixed pay range given — value depends on which ore you find. Pay also halves if more than one player works the job, so solo runs keep the full amount.",
    exact: null,
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"Mining can pass $100 in four minutes on a lucky solo run.\" \"If more than one player, the job pays half that value, so solo runs keep the full amount.\" A rare Pure Uranium crystal processes for $150 as a bonus, not something to plan around."
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Mining Job: Uranium Pays $35, Diamond Pays $25, Gold Pays $15, Silver Pays $5. Expected Pay is random. Takes 4:00 to complete.\"",
        diff: "Same 4-minute timer, but breaks pay down by ore type instead of Bloxodes' single 'over $100 on a lucky run' figure. This source is from 2021 and the ore payout table may be outdated."
      }
    ]
  },
  {
    id: "harvesting",
    name: "Harvesting",
    location: "Either farm, Farm Island",
    timeLabel: "12 minutes",
    timeMinutesLow: 12,
    timeMinutesHigh: 12,
    payLow: 80,
    payHigh: 90,
    payLabel: "$80–$90",
    perMinuteNote: null,
    exact: null,
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"Harvesting Either farm, Farm Island 12 minutes $80–$90.\" \"Harvesting is the longest of these, at 12 minutes.\""
      }
    ]
  },
  {
    id: "furniture-delivery",
    name: "Furniture Delivery",
    location: "Pine Design Furniture, Mountain Island",
    timeLabel: "2+ minutes (no upper bound given)",
    timeMinutesLow: 2,
    timeMinutesHigh: null,
    payLow: null,
    payHigh: 90,
    payLabel: "Up to $90",
    perMinuteNote: "No upper time bound given — the run length depends on how far the drop-off is, so a per-minute rate can't be stated honestly.",
    exact: null,
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"Furniture Delivery Pine Design Furniture, Mountain Island 2+ minutes Up to $90.\" \"Its timer depends on how far the drop-off is when you start, and it runs at least two minutes.\""
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Furniture Moving Job: Pays $70 Long Distance, $50 Short Distance. Takes 1:10-4:30 to complete (depends on distance).\"",
        diff: "Gives a lower cap ($70, not $90) split into two fixed distance tiers instead of Bloxodes' single 'up to $90'. This source is from 2021 and may be outdated."
      }
    ]
  },
  {
    id: "emergency-response",
    name: "Emergency Response",
    location: "Hospital, City Island",
    timeLabel: "Varies",
    timeMinutesLow: null,
    timeMinutesHigh: null,
    payLow: 50,
    payHigh: 80,
    payLabel: "$50–$80, based on patient distance",
    perMinuteNote: "Time limit is listed as \"Varies\" at the source, so a per-minute rate can't be stated honestly.",
    exact: null,
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"Emergency Response Hospital, City Island Varies $50–80, based on patient distance.\" \"Pay runs from $50 to $80 depending on how far the patient is.\""
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Hospital Job: Pays $60. Takes 2:00-5:20 to complete.\"",
        diff: "Gives one fixed $60 payout and a 2:00-5:20 time range, instead of Bloxodes' $50–80 distance-based range with no fixed timer. This source is from 2021 and may be outdated."
      }
    ]
  },
  {
    id: "paper-round",
    name: "Paper Round",
    location: "Post Office, Residential Island, or newspaper booth, Paradise Island",
    timeLabel: "2 minutes",
    timeMinutesLow: 2,
    timeMinutesHigh: 2,
    payLow: 50,
    payHigh: 60,
    payLabel: "$50–$60",
    perMinuteNote: null,
    exact: null,
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"Paper Round Post Office, Residential Island, or newspaper booth, Paradise Island 2 minutes $50–60.\" \"Paper Round has one of the shortest timers, at two minutes.\""
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Newspaper Job: Pays $50. Takes 1:30 to complete.\"",
        diff: "Gives one fixed $50 payout and a shorter 1:30 timer, instead of Bloxodes' $50–60 range over 2 minutes. This source is from 2021 and may be outdated."
      }
    ]
  },
  {
    id: "races",
    name: "Races",
    location: "Not a job — repeatable",
    timeLabel: "Not given by the primary source",
    timeMinutesLow: null,
    timeMinutesHigh: null,
    payLow: 40,
    payHigh: 40,
    payLabel: "$40 per successful race",
    perMinuteNote: "No run length is given for races as a category, so a per-minute rate can't be stated honestly. Use \"runs needed\" instead.",
    exact: { unit: "successful race", dollarsPerUnit: 40, explain: "Each successful race finish pays a flat $40." },
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"A successful race pays $40.\" \"Races and the Wonderful Wobbly Quiz aren't jobs, but you can repeat both, and both give a fixed reward for doing them well.\""
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Go-Kart Race: Pays $40, Takes 1:15-1:35.\" \"Bi-Plane Race: Pays $40, Takes 2:00-5:20.\" \"Boat Race: Pays $40, Takes 2:25-2:35.\"",
        diff: "Agrees on the $40 payout across every race type it lists, and adds per-race timers Bloxodes doesn't give — shown here for reference only, not used in the calculator, since this source is from 2021."
      }
    ]
  },
  {
    id: "wobbly-quiz",
    name: "Wonderful Wobbly Quiz",
    location: "Not a job — repeatable",
    timeLabel: "Not given by the primary source",
    timeMinutesLow: null,
    timeMinutesHigh: null,
    payLow: 30,
    payHigh: 30,
    payLabel: "$30 with all answers correct",
    perMinuteNote: "No run length is given by the primary source, so a per-minute rate can't be stated honestly. Use \"runs needed\" instead.",
    exact: { unit: "perfect quiz", dollarsPerUnit: 30, explain: "A perfect run (every answer correct) pays a flat $30." },
    sources: [
      {
        name: "Bloxodes",
        url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money",
        date: "2026-11-06",
        note: "\"The Wonderful Wobbly Quiz pays $30 when every answer is right.\""
      },
      {
        name: "GamePretty",
        url: "https://gamepretty.com/?p=38717",
        date: "2021-07-16",
        note: "\"Wobbly Quiz Job: Pays $30. Takes 2:30-3:00 to complete.\"",
        diff: "Agrees on the $30 payout and adds a 2:30-3:00 timer Bloxodes doesn't give — shown here for reference only, not used in the calculator, since this source is from 2021."
      }
    ]
  }
];

// Space-update jobs pay a separate currency (Space Credits, not Wobbly Dollars) and the
// primary source gives no per-job numbers for them ("Exact Space pay is harder to pin down").
// Per the build brief, they are omitted from the pay table rather than guessed at.
var SPACE_JOBS_NOTE = {
  names: ["Asteroid Mining", "Asteroid Defence", "Space Rescue", "Space Courier", "Space Diner", "Space Disco", "Luggage Handler", "Space Mechanic"],
  currency: "Space Credits (shown with a \"c\", separate from Wobbly Dollars)",
  reason: "No source found gives per-job Space Credit payouts, so these are listed by name only — no pay figures are shown for them.",
  source: { name: "Bloxodes", url: "https://bloxodes.com/articles/wobbly-life-how-to-make-money", date: "2026-11-06" }
};

// Pure calculation helpers — no DOM access, so they run identically in the browser and in
// node test.js. Money is never averaged into a fabricated midpoint: a range stays a range.

function jobById(id) {
  for (var i = 0; i < JOBS.length; i++) {
    if (JOBS[i].id === id) return JOBS[i];
  }
  return null;
}

function runsNeeded(job, target) {
  target = Number(target);
  if (!job) return { error: "Unknown job." };
  if (!isFinite(target) || target <= 0) {
    return { error: "Enter a target price above $0." };
  }
  if (job.exact) {
    var runs = Math.ceil(target / job.exact.dollarsPerUnit);
    return {
      mode: "exact",
      runs: runs,
      unit: job.exact.unit,
      dollarsPerUnit: job.exact.dollarsPerUnit,
      explain: job.exact.explain,
      totalAtRuns: runs * job.exact.dollarsPerUnit
    };
  }
  if (job.payLow == null && job.payHigh == null) {
    return { error: job.name + " has no fixed pay figure to calculate runs from — " + job.payLabel };
  }
  var high = job.payHigh != null ? job.payHigh : job.payLow;
  var low = job.payLow != null ? job.payLow : job.payHigh;
  return {
    mode: "range",
    runsOptimistic: Math.ceil(target / high),
    runsConservative: Math.ceil(target / low),
    payLow: low,
    payHigh: high
  };
}

// Returns { low, high } dollars-per-minute, or null when a fair rate can't be stated
// (open-ended or "Varies" time limits, or no fixed pay figure at all).
function perMinuteRange(job) {
  if (job.perMinuteNote) return null;
  if (job.timeMinutesLow == null || job.timeMinutesHigh == null) return null;
  if (job.payLow == null && job.payHigh == null) return null;
  var lowPay = job.payLow != null ? job.payLow : job.payHigh;
  var highPay = job.payHigh != null ? job.payHigh : job.payLow;
  return {
    low: lowPay / job.timeMinutesHigh,
    high: highPay / job.timeMinutesLow
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    JOBS: JOBS,
    SPACE_JOBS_NOTE: SPACE_JOBS_NOTE,
    jobById: jobById,
    runsNeeded: runsNeeded,
    perMinuteRange: perMinuteRange
  };
}
