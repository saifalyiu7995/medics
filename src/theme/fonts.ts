import { Platform } from 'react-native';

/**
 * Linked font files use filenames like `Inter_18pt-Regular.ttf`, but iOS resolves
 * `fontFamily` by the font’s internal family name (e.g. "Inter 18pt"), not the file name.
 * Android uses the asset filename without extension.
 */
export const inter18Regular = Platform.select({
  ios: 'Inter 18pt',
  android: 'Inter_18pt-Regular',
}) as string;

export const inter24Bold = Platform.select({
  ios: 'Inter 24pt',
  android: 'Inter_24pt-Bold',
}) as string;
