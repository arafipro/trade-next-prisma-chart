export default function Layout(props: {
  leftTop: React.ReactNode;
  rightTop: React.ReactNode;
  leftBottom: React.ReactNode;
  rightBottom: React.ReactNode;
}) {
  return (
		<div className="p-4">
			{/* <h2 className="text-center text-3xl">サンプルチャート</h2> */}
      <div className="flex">
        {props.leftTop}
        {props.rightTop}
      </div>
      {/* <div className="flex">
        {props.leftBottom}
        {props.rightBottom}
      </div> */}
    </div>
  );
}
