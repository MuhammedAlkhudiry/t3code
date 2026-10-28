import { requireNativeView, requireOptionalNativeModule } from "expo";
import { View, type NativeSyntheticEvent, type ViewProps } from "react-native";
import type { ComposerImageDropTargetProps } from "./ComposerImageDropTarget";

interface NativeDropProps extends ViewProps {
  readonly enabled: boolean;
  readonly onDropImages: (event: NativeSyntheticEvent<{ uris: ReadonlyArray<string> }>) => void;
}

const module = requireOptionalNativeModule<{
  readonly ViewPrototypes?: { readonly T3ComposerEditor_ImageDropTarget?: unknown };
}>("T3ComposerEditor");
const DropTarget = module?.ViewPrototypes?.T3ComposerEditor_ImageDropTarget
  ? requireNativeView<NativeDropProps>("T3ComposerEditor", "ImageDropTarget")
  : null;

export function ComposerImageDropTarget({
  enabled,
  onDropImages,
  ...props
}: ComposerImageDropTargetProps) {
  return DropTarget ? (
    <DropTarget
      {...props}
      enabled={enabled}
      onDropImages={(event) => onDropImages(event.nativeEvent.uris)}
    />
  ) : (
    <View {...props} />
  );
}
