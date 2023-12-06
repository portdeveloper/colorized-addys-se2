import { Address } from "viem";

type Color = string; // Color represented as a HEX string
type AddressSegment = { text: string; color: Color };

function segmentAddress(address: Address): AddressSegment[] {
  const cleanAddress = address.startsWith("0x") ? address.slice(2) : address;
  const segmentLength = Math.ceil(cleanAddress.length / 4);
  const totalSegments = Math.ceil(cleanAddress.length / segmentLength);
  const segments: AddressSegment[] = [];

  for (let i = 0; i < cleanAddress.length; i += segmentLength) {
    const segmentText = cleanAddress.substring(i, Math.min(i + segmentLength, cleanAddress.length));
    // Pass the index and totalSegments to hashToColor for distinct colors
    const color = hashToColor(segmentText, i / segmentLength, totalSegments);
    segments.push({ text: segmentText, color });
  }

  return segments;
}

function hashToColor(segment: string, index: number, totalSegments: number): Color {
  // Hash the segment content to get a base hue value
  let hash = 0;
  for (let i = 0; i < segment.length; i++) {
    hash = segment.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Get a hue that is based on the segment content and index to ensure variety
  const baseHue = hash % 360;
  const hue = (baseHue + index * (360 / totalSegments)) % 360;

  const saturation = 90; // High saturation for vivid colors
  const lightness = 40; // Lightness adjusted for visibility on white background
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const ColorizedAddress = ({ address }: { address: Address }) => {
  const segments = segmentAddress(address);

  return (
    <div className="flex justify-center items-center bg-white rounded-md px-2 py-1 whitespace-nowrap">
      <span className="text-xs md:text-sm lg:text-base font-bold text-black">0x</span>{" "}
      {segments.map((segment, index) => (
        <span key={index} className={`text-xs md:text-sm lg:text-base font-bold`} style={{ color: segment.color }}>
          {segment.text}
        </span>
      ))}
    </div>
  );
};

export default ColorizedAddress;
