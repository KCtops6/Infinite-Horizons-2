MoreJS.villagerTrades(event => {
    event.removeTrades({ output: 'ae2:meteorite_compass' });
    event.addCustomTrade("forestry:beekeeper", 1, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 5);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 10);
        offer.output = "forestry:meadows_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 1, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 5);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 10);
        offer.output = "forestry:forest_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 2, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 5);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 10);
        offer.output = "forestry:savanna_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 2, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 10);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 20);
        offer.output = "forestry:modest_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 4, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 10);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 20);
        offer.output = "forestry:tropical_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 3, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 10);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 20);
        offer.output = "forestry:marshy_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 3, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 10);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 20);
        offer.output = "forestry:wintry_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 4, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 10);
        offer.secondCost = Item.of("mysticalagriculture:nature_essence", 20);
        offer.output = "forestry:lush_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 2, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 10);
        offer.secondCost = Item.of("mysticalagriculture:water_essence", 20);
        offer.output = "forestry:aquatic_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 5, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 25);
        offer.secondCost = Item.of("mysticalagriculture:end_essence", 50);
        offer.output = "forestry:ender_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.addCustomTrade("forestry:beekeeper", 5, (offer, entity, random) => {
        offer.firstCost = Item.of("minecraft:emerald", 25);
        offer.secondCost = Item.of("mysticalagriculture:nether_essence", 50);
        offer.output = "forestry:nether_hive";
        offer.maxUses = 1;
        offer.demand = 10;
        offer.villagerExperience = 12;
        offer.rewardExp = true;
    });
    event.removeTrades({ output: 'forestry:drone_bee' });
});