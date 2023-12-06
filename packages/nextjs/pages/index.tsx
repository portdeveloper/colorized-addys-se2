import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import ColorizedAddress from "~~/components/scaffold-eth/ColorizedAddress";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/pages/index.tsx <ColorizedAddress address="0x64ae474da28db2ef925b87e94a81c8f2783f6066" />
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
            <ColorizedAddress address="0x78bee64f2e74a2e5b561152059c389da74124914" />
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804637" />
              <ColorizedAddress address="0x77DC2BB1AF6AE7A10C66248D99FCC582F5C78EB3" />
              <ColorizedAddress address="0x626541D5BBB763DABB5567075303FB0D7941807D" />
              <ColorizedAddress address="0x31A14987EA1552E9B3EA89E995F3F8A970F028B3" />
              <ColorizedAddress address="0x12482FFD925E6B62323613F3074250E806E739B2" />
              <ColorizedAddress address="0x88B64234376278BACEDC7F24FD56133B446713CA" />
              <ColorizedAddress address="0x6F9688969C6EFC4F2B6DCAD333CD76D673572822" />
              <ColorizedAddress address="0xBDD589B729D25895F61D0758933FECE16810DB77" />
              <ColorizedAddress address="0xEB635974D756820F72FEC1F23C196499C1AB9544" />
              <ColorizedAddress address="0x204D9F92E2B4507688E7B27F98C60B8DF24C2B0E" />
              <ColorizedAddress address="0xA122A7Ed69597DBd77Fb2C539E13B7C3fB804637" />
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
