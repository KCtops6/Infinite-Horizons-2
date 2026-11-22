const DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents');
const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

EntityEvents.spawned('minecraft:item', event => {
    var itemEntity = event.entity;
    var stack = itemEntity.item;
    if (stack && stack.id === 'forestry:princess_bee') {
        var pristineType = BuiltInRegistries.DATA_COMPONENT_TYPE.get(
            ResourceLocation.parse('forestry:bee_pristine')
        );
        if (pristineType) {
            stack.set(pristineType, Java.cast('java.lang.Boolean', true));
            itemEntity.item = stack;
        }
    }
});