const Table: React.FC = () => {
  const data = [
    { c1: 1, c2: "2", c3: "3", c4: "4" },
    { c1: "1", c2: "2", c3: "3", c4: "4" },
    { c1: "1", c2: "2", c3: "3", c4: "4" },
    { c1: "1", c2: "2", c3: "3", c4: "4" },
    { c1: "1", c2: "2", c3: "3", c4: "4" },
    { c1: "1", c2: "2", c3: "3", c4: "4" },
    { c1: "mina", c2: "2", c3: "maryam", c4: "4" },
  ];
  return (
    <table className="border-2 w-full h-full text-center">
      <thead>
        <tr>
          <th>Projeler</th>
          {/* <th>B</th>
          <th>C</th>
          <th>D</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.c1}</td>
            <td>{row.c2}</td>
            <td>{row.c3}</td>
            <td>{row.c4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
