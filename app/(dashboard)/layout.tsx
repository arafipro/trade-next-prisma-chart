export default function Layout(props: {
  leftTop: React.ReactNode;
  rightTop: React.ReactNode;
  leftBottom: React.ReactNode;
  rightBottom: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        {props.leftTop}
        {props.rightTop}
      </div>
      <div className="flex">
        {props.leftBottom}
        {props.rightBottom}
      </div>
    </div>
  );
}
