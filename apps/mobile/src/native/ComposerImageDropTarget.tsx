import { View, type ViewProps } from "react-native";

export interface ComposerImageDropTargetProps extends ViewProps {
  readonly enabled: boolean;
  readonly onDropImages: (uris: ReadonlyArray<string>) => void;
}

export function ComposerImageDropTarget({
  enabled: _enabled,
  onDropImages: _onDropImages,
  ...props
}: ComposerImageDropTargetProps) {
  return <View {...props} />;
}
