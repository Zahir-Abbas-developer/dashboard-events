type items = {
  name: string;
  color: string;
};

const Breadcrumb = ({ breadCrumbData }: any) => {
 
  return (
    <div className="BreadCrum_main">
      {breadCrumbData.map((element: items,i:number) => (
        <span
          key={i} 
         style={{marginTop:"10px"}}
        >
          {element.name}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;