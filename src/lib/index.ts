export class WeaponClass {
	public static Shooter = new WeaponClass("Shooter");
	public static Roller = new WeaponClass("Roller");
	public static Charger = new WeaponClass("Charger");
	public static Slosher = new WeaponClass("Slosher");
	public static Splatling = new WeaponClass("Splatling");
	public static Dualies = new WeaponClass("Dualies");
	public static Brella = new WeaponClass("Brella");
	public static Blaster = new WeaponClass("Blaster");
	public static Brush = new WeaponClass("Brush");
	public static Stringer = new WeaponClass("Stringer");
	public static Splatana = new WeaponClass("Splatana");

	private constructor(public name: string) {}

	public equals(other: WeaponClass): boolean {
		return this.name === other.name;
	}
}

const Shooter = WeaponClass.Shooter;
const Roller = WeaponClass.Roller;
const Charger = WeaponClass.Charger;
const Slosher = WeaponClass.Slosher;
const Splatling = WeaponClass.Splatling;
const Dualies = WeaponClass.Dualies;
const Brella = WeaponClass.Brella;
const Blaster = WeaponClass.Blaster;
const Brush = WeaponClass.Brush;
const Stringer = WeaponClass.Stringer;
const Splatana = WeaponClass.Splatana;

export class SubWeapon {
	public static SplatBomb = new SubWeapon("Splat Bomb");
	public static SuctionBomb = new SubWeapon("Suction Bomb");
	public static BurstBomb = new SubWeapon("Burst Bomb");
	public static Sprinkler = new SubWeapon("Sprinkler");
	public static SplashWall = new SubWeapon("Splash Wall");
	public static FizzyBomb = new SubWeapon("Fizzy Bomb");
	public static CurlingBomb = new SubWeapon("Curling Bomb");
	public static Autobomb = new SubWeapon("Autobomb");
	public static SquidBeakon = new SubWeapon("Squid Beakon");
	public static PointSensor = new SubWeapon("Point Sensor");
	public static InkMine = new SubWeapon("Ink Mine");
	public static Splatform = new SubWeapon("Splatform");
	public static LineMarker = new SubWeapon("Line Marker");
	public static Torpedo = new SubWeapon("Torpedo");

	private constructor(public name: string) {}

	public equals(other: WeaponClass): boolean {
		return this.name === other.name;
	}
}

const SplatBomb = SubWeapon.SplatBomb;
const SuctionBomb = SubWeapon.SuctionBomb;
const BurstBomb = SubWeapon.BurstBomb;
const Sprinkler = SubWeapon.Sprinkler;
const SplashWall = SubWeapon.SplashWall;
const FizzyBomb = SubWeapon.FizzyBomb;
const CurlingBomb = SubWeapon.CurlingBomb;
const Autobomb = SubWeapon.Autobomb;
const SquidBeakon = SubWeapon.SquidBeakon;
const PointSensor = SubWeapon.PointSensor;
const InkMine = SubWeapon.InkMine;
const Splatform = SubWeapon.Splatform;
const LineMarker = SubWeapon.LineMarker;
const Torpedo = SubWeapon.Torpedo;

export class SpecialWeapon {
	public static Trizooka = new SpecialWeapon("Trizooka");
	public static BigBubbler = new SpecialWeapon("Big Bubbler");
	public static Zipcaster = new SpecialWeapon("Zipcaster");
	public static InkStorm = new SpecialWeapon("Ink Storm");
	public static BooyahBomb = new SpecialWeapon("Booyah Bomb");
	public static WaveBreaker = new SpecialWeapon("Wave Breaker");
	public static InkVac = new SpecialWeapon("Ink Vac");
	public static KillerWailOG = new SpecialWeapon("Killer Wail O.G.");
	public static Inkjet = new SpecialWeapon("Inkjet");
	public static UltraStamp = new SpecialWeapon("Ultra Stamp");
	public static CrabTank = new SpecialWeapon("Crab Tank");
	public static Reefslider = new SpecialWeapon("Reefslider");
	public static TripleInkstrike = new SpecialWeapon("Triple Inkstrike");
	public static Tacticooler = new SpecialWeapon("Tacticooler");
	public static SuperChumps = new SpecialWeapon("Super Chumps");
	public static KrakenRoyale = new SpecialWeapon("Kraken Royale");
	public static TripleSplashdown = new SpecialWeapon("Triple Splashdown");

	private constructor(public name: string) {}

	public equals(other: WeaponClass): boolean {
		return this.name === other.name;
	}
}

const Trizooka = SpecialWeapon.Trizooka;
const BigBubbler = SpecialWeapon.BigBubbler;
const Zipcaster = SpecialWeapon.Zipcaster;
const InkStorm = SpecialWeapon.InkStorm;
const BooyahBomb = SpecialWeapon.BooyahBomb;
const WaveBreaker = SpecialWeapon.WaveBreaker;
const InkVac = SpecialWeapon.InkVac;
const KillerWailOG = SpecialWeapon.KillerWailOG;
const Inkjet = SpecialWeapon.Inkjet;
const UltraStamp = SpecialWeapon.UltraStamp;
const CrabTank = SpecialWeapon.CrabTank;
const Reefslider = SpecialWeapon.Reefslider;
const TripleInkstrike = SpecialWeapon.TripleInkstrike;
const Tacticooler = SpecialWeapon.Tacticooler;
const SuperChumps = SpecialWeapon.SuperChumps;
const KrakenRoyale = SpecialWeapon.KrakenRoyale;
const TripleSplashdown = SpecialWeapon.TripleSplashdown;

export class Weapon {
	constructor(
		public type: WeaponClass,
		public weapons: Array<WeaponKit>
	) {
		for (const weapon of weapons) {
			weapon.type = type;
		}
	}
}
export class WeaponKit {
	public name: Array<string>;
	public type: WeaponClass = Shooter;

	constructor(
		name: string | Array<string>,
		public sub: SubWeapon,
		public special: SpecialWeapon,
		public pfs: number
	) {
		if (pfs % 10 !== 0 || pfs < 160 || pfs > 240) {
			throw new Error("Invalid PFS: " + pfs);
		}
		this.name = Array.isArray(name) ? name : [name];
	}
}

export const WEAPONS = [
	new Weapon(Shooter, [
		new WeaponKit("Sploosh-o-matic", SplatBomb, UltraStamp, 200),
		new WeaponKit("Neo Sploosh-o-matic", PointSensor, KillerWailOG, 200),
		new WeaponKit("Sploosh-o-matic 7", Torpedo, TripleSplashdown, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Splattershot Jr.", SplatBomb, BigBubbler, 210),
		new WeaponKit("Custom Splattershot Jr.", Autobomb, Tacticooler, 210),
		new WeaponKit("Kensa Splattershot Jr.", Torpedo, InkStorm, 210)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Splash-o-matic", BurstBomb, CrabTank, 210),
		new WeaponKit("Neo Splash-o-matic", SuctionBomb, TripleInkstrike, 210),
		new WeaponKit("Splash-o-matic 5", Splatform, Zipcaster, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Aerospray MG", PointSensor, TripleSplashdown, 200),
		new WeaponKit("Aerospray RG", InkMine, TripleInkstrike, 200),
		new WeaponKit("Aerospray PG", BurstBomb, Tacticooler, 220)
	]),
	new Weapon(Shooter, [
		new WeaponKit(
			["Splattershot", "Hero Shot Replica"],
			SuctionBomb,
			SuperChumps,
			210
		),
		new WeaponKit(
			["Tentatek Splattershot", "Octo Shot Replica"],
			SplatBomb,
			Inkjet,
			210
		),
		new WeaponKit(
			["Wasabi Splattershot", "Order Shot Replica"],
			BurstBomb,
			Reefslider,
			210
		)
	]),
	new Weapon(Shooter, [
		new WeaponKit(".52 Gal", InkMine, KillerWailOG, 200),
		new WeaponKit(".52 Gal Deco", SplashWall, TripleSplashdown, 200),
		new WeaponKit(".52 Gal Premium", CurlingBomb, Reefslider, 210)
	]),
	new Weapon(Shooter, [
		new WeaponKit("N-ZAP '85", SuctionBomb, Tacticooler, 210),
		new WeaponKit("N-ZAP '89", Autobomb, InkStorm, 200),
		new WeaponKit("N-ZAP '83", Sprinkler, InkVac, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Splattershot Pro", SuctionBomb, CrabTank, 210),
		new WeaponKit("Forge Splattershot Pro", PointSensor, Trizooka, 200),
		new WeaponKit("Berry Splattershot Pro", Autobomb, BooyahBomb, 210)
	]),
	new Weapon(Shooter, [
		new WeaponKit(".96 Gal", Sprinkler, WaveBreaker, 200),
		new WeaponKit(".96 Gal Deco", SplashWall, KrakenRoyale, 210),
		new WeaponKit(".96 Gal Deluxe", PointSensor, BooyahBomb, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Jet Squelcher", InkMine, InkStorm, 210),
		new WeaponKit("Custom Jet Squelcher", BurstBomb, KrakenRoyale, 210),
		new WeaponKit("Foolish Jet Squelcher", LineMarker, BigBubbler, 210)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Dual Squelcher", SplatBomb, WaveBreaker, 200),
		new WeaponKit("Custom Dual Squelcher", SquidBeakon, BigBubbler, 210),
		new WeaponKit("Reinvented Dual Squelcher", Autobomb, InkVac, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("L-3 Nozzlenose", CurlingBomb, Zipcaster, 200),
		new WeaponKit("L-3 Nozzlenose D", BurstBomb, Inkjet, 200),
		new WeaponKit("Peach L-3 Nozzlenose", SplashWall, UltraStamp, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("H-3 Nozzlenose", SplashWall, Zipcaster, 210),
		new WeaponKit("H-3 Nozzlenose D", SuctionBomb, BigBubbler, 200),
		new WeaponKit("Cherry H-3 Nozzlenose", Autobomb, KrakenRoyale, 200)
	]),
	new Weapon(Shooter, [
		new WeaponKit("Squeezer", SplashWall, InkVac, 200),
		new WeaponKit("Foil Squeezer", SquidBeakon, InkStorm, 200),
		new WeaponKit("Lemon Squeezer", Autobomb, Zipcaster, 200)
	]),
	new Weapon(Roller, [
		new WeaponKit("Carbon Roller", Torpedo, Zipcaster, 190),
		new WeaponKit("Carbon Roller Deco", BurstBomb, Trizooka, 190),
		new WeaponKit("Carbon Roller 27", LineMarker, SuperChumps, 190)
	]),
	new Weapon(Roller, [
		new WeaponKit(
			["Splat Roller", "Order Roller Replica"],
			CurlingBomb,
			BigBubbler,
			180
		),
		new WeaponKit("Krak-On Splat Roller", SuctionBomb, KrakenRoyale, 190),
		new WeaponKit("Comic Splat Roller", FizzyBomb, TripleSplashdown, 190)
	]),
	new Weapon(Roller, [
		new WeaponKit("Dynamo Roller", Sprinkler, Tacticooler, 190),
		new WeaponKit("Gold Dynamo Roller", SplatBomb, CrabTank, 190),
		new WeaponKit("Tempered Dynamo Roller", LineMarker, BooyahBomb, 190)
	]),
	new Weapon(Roller, [
		new WeaponKit("Flingza Roller", Autobomb, InkStorm, 210),
		new WeaponKit("Foil Flingza Roller", SuctionBomb, Inkjet, 210),
		new WeaponKit("Static Flingza Roller", Splatform, BooyahBomb, 210)
	]),
	new Weapon(Roller, [
		new WeaponKit("Big Swig Roller", SquidBeakon, KillerWailOG, 210),
		new WeaponKit("Big Swig Roller Express", Torpedo, Tacticooler, 230),
		new WeaponKit("Limeade Big Swig Roller", SuctionBomb, InkVac, 210)
	]),
	new Weapon(Charger, [
		new WeaponKit("Classic Squiffer", Autobomb, CrabTank, 190),
		new WeaponKit("New Squiffer", Splatform, Zipcaster, 190),
		new WeaponKit("Fresh Squiffer", SuctionBomb, Trizooka, 200)
	]),
	new Weapon(Charger, [
		new WeaponKit(
			["Splat Charger", "Order Charger Replica", "Splatterscope"],
			SplatBomb,
			BooyahBomb,
			210
		),
		new WeaponKit(
			["Z+F Splat Charger", "Z+F Splatterscope"],
			SplashWall,
			CrabTank,
			210
		),
		new WeaponKit(
			["Barazushi Charger", "Barazushi Scope"],
			BurstBomb,
			KillerWailOG,
			210
		)
	]),
	new Weapon(Charger, [
		new WeaponKit(
			["E-liter 4K", "E-liter 4K Scope"],
			LineMarker,
			WaveBreaker,
			210
		),
		new WeaponKit(
			["Custom E-liter 4K", "Custom E-liter 4K Scope"],
			SquidBeakon,
			InkStorm,
			210
		),
		new WeaponKit(
			["Diesel E-liter 4K", "Diesel E-liter 4K Scope"],
			Splatform,
			BooyahBomb,
			210
		)
	]),
	new Weapon(Charger, [
		new WeaponKit("Bamboozler 14 Mk I", Torpedo, TripleInkstrike, 200),
		new WeaponKit("Bamboozler 14 Mk II", FizzyBomb, SuperChumps, 200),
		new WeaponKit("Bamboozler 14 Mk III", LineMarker, WaveBreaker, 190)
	]),
	new Weapon(Charger, [
		new WeaponKit("Goo Tuber", FizzyBomb, Trizooka, 200),
		new WeaponKit("Custom Goo Tuber", Torpedo, SuperChumps, 200),
		new WeaponKit("Salty Goo Tuber", SuctionBomb, TripleSplashdown, 170)
	]),
	new Weapon(Charger, [
		new WeaponKit("Snipewriter 5H", Sprinkler, Tacticooler, 210),
		new WeaponKit("Snipewriter 5B", SplashWall, TripleInkstrike, 220),
		new WeaponKit("Snipewriter .5mm", SquidBeakon, InkVac, 210)
	]),
	new Weapon(Slosher, [
		new WeaponKit(
			["Slosher", "Order Slosher Replica"],
			Splatform,
			UltraStamp,
			190
		),
		new WeaponKit("Slosher Deco", Torpedo, Zipcaster, 200),
		new WeaponKit("Soda Slosher", FizzyBomb, WaveBreaker, 210)
	]),
	new Weapon(Slosher, [
		new WeaponKit("Tri-Slosher", SplatBomb, Inkjet, 190),
		new WeaponKit("Tri-Slosher Nouveau", FizzyBomb, TripleInkstrike, 200),
		new WeaponKit("Throwback Tri-Slosher", CurlingBomb, WaveBreaker, 180)
	]),
	new Weapon(Slosher, [
		new WeaponKit("Sloshing Machine", FizzyBomb, BooyahBomb, 200),
		new WeaponKit("Sloshing Machine Neo", Autobomb, KillerWailOG, 200),
		new WeaponKit(
			"Petrichor Sloshing Machine",
			SplatBomb,
			TripleSplashdown,
			200
		)
	]),
	new Weapon(Slosher, [
		new WeaponKit("Bloblobber", InkMine, KillerWailOG, 190),
		new WeaponKit("Bloblobber Deco", Splatform, TripleInkstrike, 190),
		new WeaponKit("Onsen Bloblobber", SplashWall, Trizooka, 210)
	]),
	new Weapon(Slosher, [
		new WeaponKit("Explosher", PointSensor, TripleInkstrike, 220),
		new WeaponKit("Custom Explosher", InkMine, Tacticooler, 220),
		new WeaponKit("Explosher J", Sprinkler, WaveBreaker, 210)
	]),
	new Weapon(Slosher, [
		new WeaponKit("Dread Wringer", Torpedo, Reefslider, 190),
		new WeaponKit("Dread Wringer D", SquidBeakon, Inkjet, 190),
		new WeaponKit("Foolish Dread Wringer", InkMine, CrabTank, 200)
	]),
	new Weapon(Slosher, [
		new WeaponKit("Skim-Pitcher", Sprinkler, BigBubbler, 190),
		new WeaponKit("Choco-Pitcher", FizzyBomb, KillerWailOG, 190),
		new WeaponKit("Strawb-Pitcher", CurlingBomb, SuperChumps, 180)
	]),
	new Weapon(Splatling, [
		new WeaponKit("Mini Splatling", Autobomb, UltraStamp, 190),
		new WeaponKit("Zink Mini Splatling", BurstBomb, BigBubbler, 200),
		new WeaponKit("Refurbished Mini Splatling", Torpedo, KillerWailOG, 210)
	]),
	new Weapon(Splatling, [
		new WeaponKit(
			["Heavy Splatling", "Order Splatling Replica"],
			Sprinkler,
			BooyahBomb,
			210
		),
		new WeaponKit("Heavy Splatling Deco", SplashWall, InkVac, 200),
		new WeaponKit("Heavy Splatling Remix", PointSensor, InkStorm, 200)
	]),
	new Weapon(Splatling, [
		new WeaponKit("Markling PNCT-8", LineMarker, Trizooka, 180),
		new WeaponKit("Markling ANOT-8", SquidBeakon, Zipcaster, 180),
		new WeaponKit("Markling 10CM-8", BurstBomb, InkStorm, 180)
	]),
	new Weapon(Splatling, [
		new WeaponKit("Ballpoint Splatling", FizzyBomb, Inkjet, 210),
		new WeaponKit("Ballpoint Splatling Nouveau", SquidBeakon, SuperChumps, 200),
		new WeaponKit("Rose-Plated Ballpoint Splatling", Torpedo, KrakenRoyale, 210)
	]),
	new Weapon(Splatling, [
		new WeaponKit("Nautilus 47", SuctionBomb, InkStorm, 210),
		new WeaponKit("Nautilus 79", InkMine, Inkjet, 210),
		new WeaponKit("Nautilus 23", PointSensor, KrakenRoyale, 210)
	]),
	new Weapon(Splatling, [
		new WeaponKit("Heavy Edit Splatling", CurlingBomb, Tacticooler, 200),
		new WeaponKit("Heavy Edit Splatling Nouveau", Sprinkler, CrabTank, 200),
		new WeaponKit("Bluejay Heavy Edit Splatling", Autobomb, Trizooka, 200)
	]),
	new Weapon(Dualies, [
		new WeaponKit("Dapple Dualies", FizzyBomb, Inkjet, 200),
		new WeaponKit("Dapple Dualies Nouveau", Torpedo, Reefslider, 190),
		new WeaponKit("Clear Dapple Dualies", CurlingBomb, CrabTank, 190)
	]),
	new Weapon(Dualies, [
		new WeaponKit(
			["Splat Dualies", "Order Replica Dualies"],
			BurstBomb,
			SuperChumps,
			210
		),
		new WeaponKit("Enperry Splat Dualies", LineMarker, Reefslider, 200),
		new WeaponKit("Revamped Splat Dualies", SuctionBomb, KillerWailOG, 200)
	]),
	new Weapon(Dualies, [
		new WeaponKit("Glooga Dualies", SplashWall, BooyahBomb, 180),
		new WeaponKit("Glooga Dualies Deco", FizzyBomb, KrakenRoyale, 200),
		new WeaponKit("Foolish Glooga Dualies", Torpedo, Trizooka, 190)
	]),
	new Weapon(Dualies, [
		new WeaponKit("Dualie Squelchers", PointSensor, Zipcaster, 200),
		new WeaponKit("Custom Dualie Squelchers", SplatBomb, InkStorm, 210),
		new WeaponKit("Retro Dualie Squelchers", Splatform, KrakenRoyale, 200)
	]),
	new Weapon(Dualies, [
		new WeaponKit("Dark Tetra Dualies", FizzyBomb, TripleSplashdown, 200),
		new WeaponKit("Light Tetra Dualies", Autobomb, Zipcaster, 200),
		new WeaponKit("Dusk Tetra Dualies", Torpedo, UltraStamp, 190)
	]),
	new Weapon(Dualies, [
		new WeaponKit("Douser Dualies FF", Autobomb, BigBubbler, 200),
		new WeaponKit("Custom Douser Dualies FF", BurstBomb, TripleInkstrike, 200),
		new WeaponKit("Douser Dualies DD", Splatform, InkVac, 190)
	]),
	new Weapon(Dualies, [
		new WeaponKit("Vinyl Dualies", CurlingBomb, TripleInkstrike, 200),
		new WeaponKit("Vinyl Dualies Neo", BurstBomb, InkVac, 200),
		new WeaponKit("Scarlet Vinyl Dualies", SquidBeakon, Inkjet, 190)
	]),
	new Weapon(Brella, [
		new WeaponKit(
			["Splat Brella", "Order Brella Replica"],
			FizzyBomb,
			InkStorm,
			200
		),
		new WeaponKit("Sorella Brella", Autobomb, Inkjet, 190),
		new WeaponKit("Waterproof Splat Brella", SplatBomb, CrabTank, 200)
	]),
	new Weapon(Brella, [
		new WeaponKit("Tenta Brella", SquidBeakon, InkVac, 190),
		new WeaponKit("Tenta Sorella Brella", InkMine, Trizooka, 200),
		new WeaponKit("Camo Tenta Brella", Sprinkler, KillerWailOG, 200)
	]),
	new Weapon(Brella, [
		new WeaponKit("Undercover Brella", Torpedo, WaveBreaker, 180),
		new WeaponKit("Undercover Sorella Brella", PointSensor, Tacticooler, 180),
		new WeaponKit("Bleached Undercover Brella", BurstBomb, UltraStamp, 180)
	]),
	new Weapon(Brella, [
		new WeaponKit("Recycled Brella 24 Mk I", LineMarker, TripleSplashdown, 190),
		new WeaponKit("Recycled Brella 24 Mk II", BurstBomb, Zipcaster, 200),
		new WeaponKit("Recycled Brella 24 Mk III", SplashWall, SuperChumps, 200)
	]),
	new Weapon(Brella, [
		new WeaponKit("Dual Scrapgun", SplatBomb, SuperChumps, 200),
		new WeaponKit("Dual Scrapgun Deco", LineMarker, BigBubbler, 200),
		new WeaponKit("Foolish Dual Scrapgun", SplashWall, Zipcaster, 200)
	]),
	new Weapon(Blaster, [
		new WeaponKit(
			["Luna Blaster", "Order Blaster Replica"],
			SplatBomb,
			InkVac,
			180
		),
		new WeaponKit("Luna Blaster Neo", FizzyBomb, Zipcaster, 180),
		new WeaponKit("Stellar Blaster Neo", CurlingBomb, UltraStamp, 180)
	]),
	new Weapon(Blaster, [
		new WeaponKit("Blaster", Autobomb, KillerWailOG, 190),
		new WeaponKit("Custom Blaster", PointSensor, Inkjet, 190),
		new WeaponKit("Blaster Muerte", Splatform, TripleSplashdown, 190)
	]),
	new Weapon(Blaster, [
		new WeaponKit("Range Blaster", BurstBomb, WaveBreaker, 200),
		new WeaponKit("Custom Range Blaster", SplatBomb, KrakenRoyale, 200),
		new WeaponKit("Grim Range Blaster", LineMarker, CrabTank, 200)
	]),
	new Weapon(Blaster, [
		new WeaponKit("Clash Blaster", Autobomb, Trizooka, 180),
		new WeaponKit("Clash Blaster Neo", CurlingBomb, SuperChumps, 170),
		new WeaponKit("Clash Blaster Lite", BurstBomb, UltraStamp, 180)
	]),
	new Weapon(Blaster, [
		new WeaponKit("Rapid Blaster", InkMine, Trizooka, 190),
		new WeaponKit("Rapid Blaster Deco", Torpedo, CrabTank, 200),
		new WeaponKit("Sunset Rapid Blaster", Splatform, Inkjet, 190)
	]),
	new Weapon(Blaster, [
		new WeaponKit("Rapid Blaster Pro", SquidBeakon, BigBubbler, 200),
		new WeaponKit("Rapid Blaster Pro Deco", LineMarker, TripleInkstrike, 200),
		new WeaponKit("Sunrise Rapid Blaster Pro", SplashWall, Tacticooler, 180)
	]),
	new Weapon(Blaster, [
		new WeaponKit("S-Blast '92", Torpedo, SuperChumps, 190),
		new WeaponKit("S-Blast '91", BurstBomb, BooyahBomb, 200),
		new WeaponKit("S-Blast FOOL1N'", SplatBomb, Reefslider, 190)
	]),
	new Weapon(Blaster, [
		new WeaponKit("Propain LPG", SplashWall, WaveBreaker, 200),
		new WeaponKit("Propain KRS", Splatform, Trizooka, 200),
		new WeaponKit("Propain 1UP", InkMine, TripleSplashdown, 200)
	]),
	new Weapon(Brush, [
		new WeaponKit("Inkbrush", SplatBomb, TripleSplashdown, 180),
		new WeaponKit("Inkbrush Nouveau", InkMine, KrakenRoyale, 190),
		new WeaponKit("Permanent Inkbrush", Sprinkler, Inkjet, 190)
	]),
	new Weapon(Brush, [
		new WeaponKit(
			["Octobrush", "Orderbrush Replica"],
			SuctionBomb,
			Zipcaster,
			190
		),
		new WeaponKit("Octobrush Nouveau", SplatBomb, InkStorm, 200),
		new WeaponKit("Calligrapher's Octobrush", FizzyBomb, UltraStamp, 210)
	]),
	new Weapon(Brush, [
		new WeaponKit("Painbrush", CurlingBomb, WaveBreaker, 190),
		new WeaponKit("Painbrush Nouveau", FizzyBomb, Tacticooler, 220),
		new WeaponKit("Sumi-E Painbrush", PointSensor, Reefslider, 190)
	]),
	new Weapon(Stringer, [
		new WeaponKit(
			["Tri-Stringer", "Order Stringer Replica"],
			SplatBomb,
			Trizooka,
			200
		),
		new WeaponKit("Inkline Tri-Stringer", Sprinkler, InkStorm, 200),
		new WeaponKit("Caffeinated Tri-Stringer", Torpedo, CrabTank, 210)
	]),
	new Weapon(Stringer, [
		new WeaponKit("REEF-LUX 450", CurlingBomb, Inkjet, 200),
		new WeaponKit("REEF-LUX 450 Deco", BurstBomb, TripleSplashdown, 200),
		new WeaponKit("Vanilla REEF-LUX 450", Torpedo, Tacticooler, 210)
	]),
	new Weapon(Stringer, [
		new WeaponKit("Wellstring V", PointSensor, BigBubbler, 210),
		new WeaponKit("Custom Wellstring V", CurlingBomb, InkVac, 200),
		new WeaponKit("Rusted Wellstring V", Splatform, WaveBreaker, 210)
	]),
	new Weapon(Stringer, [
		new WeaponKit("Syringer", Sprinkler, TripleInkstrike, 210),
		new WeaponKit("Forge Syringer", InkMine, UltraStamp, 200),
		new WeaponKit("Syringer Royale", SplashWall, KillerWailOG, 200)
	]),
	new Weapon(Splatana, [
		new WeaponKit(
			["Splatana Stamper", "Order Splatana Stamper"],
			BurstBomb,
			Zipcaster,
			210
		),
		new WeaponKit("Splatana Stamper Nouveau", SquidBeakon, CrabTank, 210),
		new WeaponKit("Foolish Splatana Stamper", Splatform, InkStorm, 210)
	]),
	new Weapon(Splatana, [
		new WeaponKit("Splatana Wiper", Torpedo, UltraStamp, 190),
		new WeaponKit("Splatana Wiper Deco", SuctionBomb, TripleSplashdown, 190),
		new WeaponKit("Festive Splatana Wiper", FizzyBomb, SuperChumps, 200)
	]),
	new Weapon(Splatana, [
		new WeaponKit("Mint Decavitator", SuctionBomb, BigBubbler, 210),
		new WeaponKit("Charcoal Decavitator", CurlingBomb, Inkjet, 200),
		new WeaponKit("Bubblegum Decavitator", Sprinkler, KrakenRoyale, 210)
	]),
	new Weapon(Splatana, [
		new WeaponKit("Splatana Wrapper", InkMine, Trizooka, 200),
		new WeaponKit("Foil Splatana Wrapper", SquidBeakon, TripleInkstrike, 210),
		new WeaponKit("Wall-Off Splatana Wrapper", SuctionBomb, Reefslider, 210)
	])
] as const;

export const WEAPON_KITS = WEAPONS.flatMap((w) => w.weapons);
