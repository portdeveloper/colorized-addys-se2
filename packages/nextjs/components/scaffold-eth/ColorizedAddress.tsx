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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function hashToColor(segment: string, index: number, totalSegments: number): Color {
  // Create base RGB values that are influenced by the character's position
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < segment.length; i++) {
    const charCode = segment.charCodeAt(i);
    // Depending on the character position, influence a different color component
    switch (i % 3) {
      case 0: // First character influences red
        r ^= (charCode << 5) | (charCode >> 3);
        break;
      case 1: // Second character influences green
        g ^= (charCode << 5) | (charCode >> 3);
        break;
      case 2: // Third character influences blue
        b ^= (charCode << 5) | (charCode >> 3);
        break;
    }
  }

  // Convert the RGB values into HEX
  const color = `#${((1 << 24) + (r % 256 << 16) + (g % 256 << 8) + (b % 256)).toString(16).slice(1)}`;
  return color;
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
