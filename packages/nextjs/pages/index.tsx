import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import ColorizedAddress from "~~/components/scaffold-eth/ColorizedAddress";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col gap-3">
              <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804637" />
              <ColorizedAddress address="0x77DC2BB1AF6AE7A10C66248D99FCC582F5C78EB3" />
              <ColorizedAddress address="0x626541D5BBB763DABB5567075303FB0D7941807D" />
              <ColorizedAddress address="0x31A14987EA1552E9B3EA89E995F3F8A970F028B3" />
              <ColorizedAddress address="0xBDD589B729D25895F61D0758933FECE16810DB77" />
              <ColorizedAddress address="0xEB635974D756820F72FEC1F23C196499C1AB9544" />
              <p className="text-md p-0 m-0">
                addresses below have a one char diff, they should look entirely different!
              </p>
              <div className="flex flex-col gap-3">
                <p className="p-0 m-0"> Last char increasing:</p>
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804637" />
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804638" />
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804639" />
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804640" />
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804641" />
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804642" />
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804643" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="p-0 m-0"> First char changing:</p>
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804637" />
                <ColorizedAddress address="0xB122A7Ed69597DBd77Fb2C539E13B7C3fB804638" />
                <ColorizedAddress address="0xC122A7Ed69597DBd77Fb2C539E13B7C3fB804639" />
                <ColorizedAddress address="0xD122A7Ed69597DBd77Fb2C539E13B7C3fB804639" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="p-0 m-0"> One random char changing:</p>
                <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804637" />
                <ColorizedAddress address="0xA122A7Ed69597FBd77Fb2C539E13B7C3fB804637" />
                <ColorizedAddress address="0xA12237Ed69597DBd77Fb2C539E13B7C3fB804637" />
                <ColorizedAddress address="0xA122A7Ed61597DBd77Fb2C539E13B7C3fB804637" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
