interface LogoProps {
  lh: string;
}
export default function Logo({ lh }: LogoProps) {
  return (
    <div>
      <img className={lh} src="/ws-parselly.svg" alt="" />
    </div>
  );
}
