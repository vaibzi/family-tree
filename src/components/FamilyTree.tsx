import Tree from "react-d3-tree";
import { familyTree } from "@/data/familyTree";
import { useRef, useEffect, useState } from "react";
import { PersonDialog } from "@/components/PersonDialog";
import { CustomNode } from "@/components/CustomNode";

export default function FamilyTree() {
  const treeContainer = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 });

  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);

  useEffect(() => {
    if (treeContainer.current) {
      const { width, height } = treeContainer.current.getBoundingClientRect();
      setDimensions({ x: width, y: height });
    }
  }, []);

  const handleNameClick = (node: any) => {
    setSelectedPerson(node);
    setOpen(true);
  };

  return (
    <>
      <div ref={treeContainer} style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={familyTree}
          translate={{ x: dimensions.x / 2, y: 100 }}
          orientation="vertical"
          renderCustomNodeElement={(rd3Props) => (
            <CustomNode {...rd3Props} onNameClick={handleNameClick} />
          )}
        />
      </div>

      <PersonDialog
        open={open}
        onOpenChange={setOpen}
        person={selectedPerson}
      />
    </>
  );
}
