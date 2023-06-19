import ClockPlugin from './clock-plugin/clock-plugin';

const PluginManager = window.PluginManager;
PluginManager.register('ClockPlugin', ClockPlugin, '[data-example-plugin]');