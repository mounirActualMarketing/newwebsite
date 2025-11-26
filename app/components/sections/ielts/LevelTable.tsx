export default function LevelTable() {
  const tableData = [
    {
      test: "Cambridge English Scale",
      levels: ["80-89", "100-119", "120-139", "140-159", "160-179", "180-199"],
    },
    {
      test: "TOEIC (Listening)\nTOEIC (Reading)",
      levels: ["", "120-224", "225-549", "550-784", "785-944", "945-990"],
    },
    {
      test: "TOEIC (Speaking)\nTOEIC (Writing)",
      levels: ["80-159", "160-239", "240-309", "310-359", "360-400", ""],
    },
    {
      test: "IELTS",
      levels: ["", "", "4.0 - 5.0", "5.5 - 6.5", "", "7.0 - 8.0"],
    },
    {
      test: "TOEFL iBT",
      levels: ["", "", "42", "72", "", "95"],
    },
  ];

  const headers = [
    "Wall Street English\nPre-A1",
    "Wall Street English\nLevels (3-5) (A1)",
    "Wall Street English\nLevels 6-9 (A2)",
    "Wall Street English\nLevels 10-13 (B1)",
    "Wall Street English\nLevels 14 - 17 (B2)",
    "Wall Street English\nLevels 18 - 20 (C1)",
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left bg-white"></th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-3 text-center bg-gray-50 text-gray-700 font-medium text-xs whitespace-pre-line border-l border-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200">
                <td className="p-3 text-left text-gray-700 whitespace-pre-line font-medium">{row.test}</td>
                {row.levels.map((level, colIndex) => (
                  <td key={colIndex} className="p-3 text-center text-gray-600 border-l border-gray-200">
                    {level}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

