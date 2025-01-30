import TabsPanel from "./TabsPanel/TabsPanel";
function RecomendedProduct() {
  const Tabs = ["Smart Watch", "Speaker", "Laptops", "Mobiles",];
  return (
    <>
      <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
    </>
  );
}

export default RecomendedProduct;
