import SparkleIcon from "@/assets/icons/SparkleIcon";

const Description = () => {
  return (
    <section className="mt-20">
      <div className="container-content">
        <div className="bg-zinc-800/50 rounded-md p-7 md:p-12 flex flex-col gap-5 shadow-sm">
          <p className=" text-zinc-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            adipisci laborum fugit, id enim maxime nesciunt minima reprehenderit
            accusamus ratione autem commodi dolore eaque, sint similique
            doloribus cumque voluptatibus. Ea.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-7">
              <div className="flex flex-col">
                <div className="font-bold text-xl">
                  <span>45</span>
                  <span className="text-sky-400">+</span>
                </div>
                <span className="text-sm text-zinc-400">Project done</span>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xl">
                  <span>1,5</span>
                  <span className=" text-sky-400">+</span>
                </div>
                <span className="text-sm text-zinc-400">
                  Years of experience
                </span>
              </div>
            </div>

            <div>
              <SparkleIcon className="size-10 text-emerald-300/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
