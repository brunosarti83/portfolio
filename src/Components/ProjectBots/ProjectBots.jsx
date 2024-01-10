/* eslint-disable react/prop-types */
import githubIcon from "../../assets/githubB.svg";
import BigButton from "../BigButton/BigButton";
import { IoLogoPython } from "react-icons/io5";
import { bots } from "../../db";
import Display from "../Display/Display";

function ProjectBots() {
  const { backtesting, entry1bot, barhlbot, momentumbot } = bots;
  return (
    <div className="flex flex-col max-md:gap-6 w-full min-h-[calc(100%_-_90px)] md:px-8 pt-6 z-[5] bg-[#F0F0F0] font-source pb-8">
      <div className="mx-auto">
        <h1 className="font-bold text-md inline">CRYPTO TRADING w/ PYTHON</h1>
        <IoLogoPython className="inline ml-4 text-[32px] mb-4 text-gray-800" />
        <br />
        <p className="font-semibold text-sm">
          Trading has been an interest of mine for many years now, and between
          2021 and 2022 I helped develop several crypto algo-trading projects
          along with a fellow friend and coder. All this projects where
          developed in Python and they mainly interact with Binance’s API via
          http requests and websockets in order to get market quotes and place
          trading orders.
        </p>
        <br />
      </div>
      <div className="flex flex-col gap-6 px-6">
        <Display
          title="Backtesting Software"
          content={backtesting.description}
        />
        <div className="flex gap-4">
          <div className="w-1/3">
            <Display
              title="Entry1 - Bot"
              content={entry1bot.description}
              link={entry1bot.repository}
            />
          </div>
          <div className="w-1/3">
            <Display
              title="3barhl - Bot"
              content={barhlbot.description}
              link={barhlbot.repository}
            />
          </div>
          <div className="w-1/3">
            <Display
              title="Momentum - Bot"
              content={momentumbot.description}
              link={momentumbot.repository}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBots;
