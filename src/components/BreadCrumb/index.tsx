import { useTheme } from "@mui/material";

type items = {
  name: string;
  color: string;
};

const Breadcrumb = ({ breadCrumbData }: any) => {
    const theme=useTheme()
  return (
    <div className="BreadCrum_main">
      {breadCrumbData.map((element: items,i:number) => (
        <span
          key={i}
          style={{ color: theme.palette.common.black, cursor: 'pointer' }}
         
        >
          {element.name}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;