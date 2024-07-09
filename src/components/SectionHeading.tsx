import { cn } from "@/lib/utils";

type Props = {
  title: string;
  shapeClassName?: string;
  titleClassName?: string;
  className?: string;
  showDivider?: boolean;
};

const SectionHeading: React.FC<Props> = ({
  title,
  shapeClassName,
  titleClassName,
  className,
  showDivider = true,
}) => {
  return (
    <>
      <div className={cn("relative", className)}>
        <h2
          className={cn(
            "relative z-[1] pl-4 font-tenorsan text-2xl uppercase tracking-[4px] text-main-100",
            titleClassName,
          )}
        >
          {title}
        </h2>
        <hr
          className={cn(
            "absolute bottom-1 left-0 inline-block h-3 w-[75%] border-0 bg-main-300",
            shapeClassName,
          )}
        />
      </div>

      {/* BORDER DIVIDER */}
      {showDivider && (
        <div className="relative mx-auto my-8 mb-10 w-full border-t-2 border-zinc-100">
          <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
          <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
        </div>
      )}
    </>
  );
};

export default SectionHeading;
