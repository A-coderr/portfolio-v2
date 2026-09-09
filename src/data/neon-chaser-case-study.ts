export const neonChaserLinks = {
  steam: "https://store.steampowered.com/app/4953870/Neon_Chaser/",
  trailer: "https://www.youtube.com/watch?v=SCsM9ZZRvbw",
  trailerEmbed:
    "https://www.youtube-nocookie.com/embed/SCsM9ZZRvbw?autoplay=1&rel=0",
  // cspell:disable-next-line
  trailerId: "SCsM9ZZRvbw",
} as const;

export const neonChaserCaseStudyMetadata = {
  title: "Neon Chaser | Anzhelika Kostyuk",
  description:
    "A Unity/C# game-development case study covering Neon Chaser's power-up architecture and save/load system.",
} as const;

export const neonChaserHeroLabels = [
  "UNITY",
  "C#",
  "GAMEPLAY SYSTEMS",
  "QA",
  "PERSISTENCE",
  "AI",
  "DESIGN",
  "TECHNICAL DOCUMENTATION",
] as const;

export const neonChaserSnapshot = [
  { label: "ROLE", value: "Game Developer" },
  { label: "TEAM", value: "2 Developers" },
  { label: "ENGINE", value: "Unity" },
  { label: "LANGUAGE", value: "C#" },
  { label: "PLATFORM", value: "PC" },
  { label: "STATUS", value: "In Development" },
] as const;

export const neonChaserPowerUps = [
  {
    name: "NITRO",
    category: "Speed / Mobility",
    description:
      "Temporarily gives the player's vehicle a significant burst of speed.",
  },
  {
    name: "MACHINE GUN TURRET",
    category: "Combat / Debuff",
    description:
      "Fires at an opponent's vehicle and applies a slowdown effect.",
  },
  {
    name: "ROCKET LAUNCHER",
    category: "Projectile / Physics",
    description:
      "Launches rockets at opponents, with successful hits physically lifting the affected vehicle into the air.",
  },
  {
    name: "OIL SPILL",
    category: "Track Hazard / Grip",
    description:
      "Leaves a trail of oil behind the vehicle. Cars driving through it lose traction and begin to slide.",
  },
  {
    name: "OP HACK",
    category: "Disruption / Stat Transfer",
    description:
      "Targets the vehicle ahead, steals speed from it, and transfers that advantage to the player.",
  },
] as const;

export const powerUpArchitectureFacts = [
  "All five power-up behaviours inherit from an abstract MonoBehaviour.",
  "PowerupController manages the currently held power-up and works with PowerupBehaviour polymorphically.",
  "One power-up is held at a time, but some vehicles can have multiple physical mounts coordinated under the same power-up.",
  "The implementation uses serialized component data rather than a shared power-up-definition ScriptableObject.",
] as const;

export const persistentStateItems = [
  "Owned / unlocked vehicles",
  "Selected vehicle",
  "Currency",
  "Completed-level progression",
  "Supported preferences",
  "Vehicle upgrades",
  "Equipped upgrade tiers",
  "Paints",
  "Visual customization",
  "Owned / enabled customization options",
] as const;

export const runtimeStateItems = [
  "Live race position",
  "Velocity",
  "Checkpoints",
  "Held power-up",
  "Power-up ammunition",
  "Detailed live race state",
] as const;

export const saveWriteSteps = [
  "Runtime State",
  "Serialize JSON",
  "Temporary File",
  "Backup Existing Save",
  "Replace Main Save",
] as const;

export const saveLoadRecoverySteps = [
  "Primary Save",
  "Valid?",
  "Yes -> Load",
  "No -> Backup Save",
  "Backup valid?",
  "Yes -> Recover",
  "No -> Safe Defaults",
] as const;
