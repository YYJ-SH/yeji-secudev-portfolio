"use client";  // 중요!
import { Avatar } from "@readyplayerme/visage";

export default function AvatarComponent({ modelSrc }: { modelSrc: string }) {
  return <Avatar modelSrc={modelSrc} />;
}
