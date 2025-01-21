const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("metro-config");

const config = {
  transformer: {
    // Add the SVG transformer
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    // Add SVG to the list of valid extensions
    assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(
      (ext) => ext !== "svg"
    ),
    sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, "svg"],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
