import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      name: "Complete Python Bootcamp in Python",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.clariwell.in%2Fresources%2Fuploads%2FTechnical-Highlights-and-Roles-of-Mechanical-Design-Engineers.webp&tbnid=h0d9JO3QUCRGlM&vet=12ahUKEwjtyNfR18WDAxWwb2wGHaS3AVYQMygBegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.clariwell.in%2Fblog%2FTechnical-Highlights-and-Roles-of-Mechanical-Design-Engineers&docid=BLRMsKswClToYM&w=1200&h=560&q=technical%20design%20images&ved=2ahUKEwjtyNfR18WDAxWwb2wGHaS3AVYQMygBegQIARB1",
      category: "Design",
      sale: "150",
      rating: "4.5",
      img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffaso.com%2F5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq%2F&psig=AOvVaw2iTAwM32_aXtuKPb3k9enj&ust=1704523728841000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC1qu3TxYMDFQAAAAAdAAAAABAI",
      earning: "$610.50",
      visitor: "24,512"
    },
    {
        name: "Advanced Excel Formulas & Functions",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.productplan.com%2Fuploads%2F2018%2F08%2Fproduct-development.png&tbnid=WDF-8hK9RwZyeM&vet=12ahUKEwiem6uv18WDAxVmfGwGHWKnDv4QMygNegUIARCOAQ..i&imgrefurl=https%3A%2F%2Fwww.productplan.com%2Flearn%2Fwhat-is-product-development%2F&docid=_9qWHetCG4-YCM&w=1024&h=681&q=development%20images&ved=2ahUKEwiem6uv18WDAxVmfGwGHWKnDv4QMygNegUIARCOAQ",
        category: "Development",
        sale: "20",
        rating: "5.0",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffaso.com%2F5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq%2F&psig=AOvVaw2iTAwM32_aXtuKPb3k9enj&ust=1704523728841000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC1qu3TxYMDFQAAAAAdAAAAABAI",
        earning: "$55.50",
        visitor: "6,200"
    },
    {
        name: "Video Editor in Filmora9",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1264210%2Fpexels-photo-1264210.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-andre-furtado-1264210.jpg%26fm%3Djpg&tbnid=SbsdMwAmVpEDPM&vet=12ahUKEwivysuf18WDAxWOTmwGHVY1CKsQMygCegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphotographer%2F&docid=vKLQC-I6sC4_vM&w=5420&h=3614&q=photography%20images&ved=2ahUKEwivysuf18WDAxWOTmwGHVY1CKsQMygCegQIARB3",
        category: "Photography",
        sale: "56",
        rating: "4.5",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffaso.com%2F5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq%2F&psig=AOvVaw2iTAwM32_aXtuKPb3k9enj&ust=1704523728841000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC1qu3TxYMDFQAAAAAdAAAAABAI",
        earning: "$610.50",
        visitor: "24,512"
    },
    {
        name: "Online Meeting Facilitation: The 4 Secret Keys",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Femeritus.org%2Fin%2Fwp-content%2Fuploads%2Fsites%2F3%2F2022%2F02%2Fdigital-marketing-2.jpg.optimal.jpg&tbnid=-kpvsk3mNZ_sgM&vet=12ahUKEwimie-D18WDAxWCa2wGHVS5CPAQMygJegUIARCFAQ..i&imgrefurl=https%3A%2F%2Femeritus.org%2Fin%2Flearn%2Fis-digital-marketing-measurable-the-importance-of-marketing-metrics-in-digital-marketing%2F&docid=5sl9n_NE-m-TfM&w=1000&h=678&q=marketing%20images&ved=2ahUKEwimie-D18WDAxWCa2wGHVS5CPAQMygJegUIARCFAQ",
        category: "Marketing",
        sale: "150",
        rating: "4.5",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffaso.com%2F5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq%2F&psig=AOvVaw2iTAwM32_aXtuKPb3k9enj&ust=1704523728841000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC1qu3TxYMDFQAAAAAdAAAAABAI",
        earning: "$610.50",
        visitor: "24,512"
    },
    {
        name: "Intermediate Blues Rhythm Guitar",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst3.depositphotos.com%2F13324256%2F34776%2Fi%2F450%2Fdepositphotos_347767559-stock-photo-top-view-paper-cut-notes.jpg&tbnid=sQ6rteIoQu-7fM&vet=12ahUKEwiBt8ro1sWDAxVLa2wGHdooAtoQMygzegUIARDtAQ..i&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fmusic.html&docid=B0bMMdWfbVxytM&w=600&h=400&q=music%20images&ved=2ahUKEwiBt8ro1sWDAxVLa2wGHdooAtoQMygzegUIARDtAQ",
        category: "Music",
        sale: "30",
        rating: "5.0",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffaso.com%2F5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq%2F&psig=AOvVaw2iTAwM32_aXtuKPb3k9enj&ust=1704523728841000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC1qu3TxYMDFQAAAAAdAAAAABAI",
        earning: "$110.50",
        visitor: "6,512"
    },
    {
        name: "B2B Sales Masterclass: People-Focussed Selling",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cio.com%2Fwp-content%2Fuploads%2F2023%2F12%2Fshutterstock_2394640901.jpg%3Fquality%3D50%26strip%3Dall&tbnid=9e7wTLw91Wdt-M&vet=12ahUKEwjpg4Ha1sWDAxX4d2wGHcMXBBoQMygJegUIARCIAQ..i&imgrefurl=https%3A%2F%2Fwww.cio.com%2Farticle%2F288554%2Fbest-practices-how-to-create-an-effective-business-continuity-plan.html&docid=HdOJU466dVVubM&w=6581&h=4387&q=business%20images&ved=2ahUKEwjpg4Ha1sWDAxX4d2wGHcMXBBoQMygJegUIARCIAQ",
        category: "Business",
        sale: "90",
        rating: "4.5",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffaso.com%2F5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq%2F&psig=AOvVaw2iTAwM32_aXtuKPb3k9enj&ust=1704523728841000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC1qu3TxYMDFQAAAAAdAAAAABAI",
        earning: "$240.50",
        visitor: "512"
    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Sale</TableCell>
            <TableCell className="tableCell">Rating</TableCell>
            <TableCell className="tableCell">Earning</TableCell>
            <TableCell className="tableCell">Visitor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.sale}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img1} alt="" className="image" />
                  {row.rating}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.earning}</TableCell>
              <TableCell className="tableCell">{row.visitor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;