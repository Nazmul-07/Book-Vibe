"use client";

import { BooksContext } from "@/context/BookContext";
import { useContext, useMemo } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { BarShapeProps, LabelProps } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF6699",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}

    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}

    Z
  `;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height),
      )}
      stroke={color}
      fill={color}
      strokeWidth={props.isActive ? 4 : 0}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const color = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={color} />;
};

const ReadBooksPage = () => {
  const booksContext = useContext(BooksContext);
  const readBooks = useMemo(
    () => booksContext?.readBooks ?? [],
    [booksContext?.readBooks],
  );

  const data = useMemo(() => {    return readBooks.map(
      (book: {
        bookName: string;
        totalPages: number;
      }) => ({
        name: book.bookName,
        pages: book.totalPages,
      }),
    );
  }, [readBooks]);

  const totalPages = readBooks.reduce(
    (total: number, book: { totalPages: number }) =>
      total + book.totalPages,
    0,
  );

  const averageRating = readBooks.length
    ? (
        readBooks.reduce(
          (total: number, book: { rating: number }) =>
            total + book.rating,
          0,
        ) / readBooks.length
      ).toFixed(1)
    : "0.0";

  return (
    <main className="min-h-screen bg-base-200/40 px-3 py-6 sm:px-6 sm:py-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-6 text-center sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 sm:text-sm">
            Reading Statistics
          </p>

          <h1 className="mt-2 text-2xl font-bold sm:text-4xl">
            My Read Books
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-xs text-base-content/60 sm:text-base">
            A visual overview of the books you have added to your
            read list.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm sm:p-6">

          {/* Statistics */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">

            <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30 sm:p-4">
              <p className="text-xs text-base-content/60">
                Total Books
              </p>

              <p className="mt-1 text-xl font-bold text-emerald-600 sm:text-2xl">
                {readBooks.length}
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-950/30 sm:p-4">
              <p className="text-xs text-base-content/60">
                Total Pages
              </p>

              <p className="mt-1 text-xl font-bold text-blue-600 sm:text-2xl">
                {totalPages}
              </p>
            </div>

            <div className="col-span-2 rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30 sm:col-span-1 sm:p-4">
              <p className="text-xs text-base-content/60">
                Average Rating
              </p>

              <p className="mt-1 text-xl font-bold text-amber-500 sm:text-2xl">
                {averageRating}
              </p>
            </div>
          </div>

          {/* Chart */}
          {readBooks.length === 0 ? (
            <div className="flex min-h-75 flex-col items-center justify-center text-center">
              <div className="mb-4 text-5xl">
                📚
              </div>

              <h2 className="text-xl font-bold">
                No Read Books Yet
              </h2>

              <p className="mt-2 max-w-md text-sm text-base-content/60">
                Add some books to your Read Books list to see
                your reading statistics here.
              </p>
            </div>
          ) : (
            <div className="w-full">

              <ResponsiveContainer
                width="100%"
                height={Math.max(350, readBooks.length * 70)}
              >
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{
                    top: 10,
                    right: 35,
                    left: 5,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />

                  {/* Book names */}
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                    tick={{
                      fontSize: 11,
                    }}
                    tickFormatter={(value) =>
                      value.length > 18
                        ? `${value.slice(0, 18)}...`
                        : value
                    }
                  />

                  {/* Pages */}
                  <XAxis
                    type="number"
                    tick={{
                      fontSize: 11,
                    }}
                  />

                  <Tooltip
                    cursor={{
                      fill: "rgba(0,0,0,0.05)",
                    }}
                    formatter={(value) => [
                      `${value} pages`,
                      "Pages",
                    ]}
                  />

                  <Bar
                    dataKey="pages"
                    shape={TriangleBar}
                    activeBar
                  >
                    <LabelList
                      dataKey="pages"
                      content={CustomColorLabel}
                      position="right"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ReadBooksPage;