import cn from "classnames";

export default function Loader({ fullScreen }: { fullScreen?: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-30 flex align-center justify-center",
        { "fixed h-full top-0 left-0 bg-neutral-300/50 top-0": fullScreen }
      )} >
      <span className="loading loading-infinity loading-xl"></span>
    </div>
  )
}