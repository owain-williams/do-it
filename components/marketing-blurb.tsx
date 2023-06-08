export default function MarketingBlurb() {
  return (
    <div className=" min-h-max bg-gradient-to-r from-violet-200 to-fuchsia-200">
      <div className="flex flex-col items-center justify-between p-24 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Do it!
        </h1>
        <sub className="text-xl text-muted-foreground">
          A Todo list for those who require... <em>motivation</em>
        </sub>
      </div>
    </div>
  );
}
