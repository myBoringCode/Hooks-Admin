import { useRef, useEffect } from "react";
import { Graph, Node } from "@antv/x6";
import { register } from "@antv/x6-react-shape";
import "./index.less";
const NodeComponent = ({ node }: { node: Node }) => {
  const data = node.getData();

  return (
    <div className="react-algo-node">
      <img src="https://gw.alipayobjects.com/zos/bmw-prod/d9f3b597-3a2e-49c3-8469-64a1168ed779.svg" alt="" />
      <span>{data.name}</span>
    </div>
  );
};

register({
  shape: "algo-test-1",
  width: 144,
  height: 28,
  effect: ["data"],
  component: NodeComponent
});

function Example() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let graph = new Graph({
      container: containerRef.current!,
      width: 800,
      height: 600
    });

    const node = graph.addNode({
      shape: "algo-test-1",
      x: 80,
      y: 80,
      data: {
        name: "逻辑回归"
      }
    });

    const update = () => {
      console.log("update", countRef.current);
      node.setData({ name: `逻辑回归 ${countRef.current}` });
      // setCount(c => c + 1);
      countRef.current += 1;
      setTimeout(update, 1000);
    };

    update();
  }, []);

  return (
    <div className="x6-graph-wrap">
      <div ref={containerRef} className="x6-graph" />
    </div>
  );
}

export default Example;
