import Button from './components/Button/Button';
import Select from './components/Select/Select';
import Table from './components/Table/organisms/Table';

function App() {
  const data: string[] = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];
  const data2 = {
    headers: ['Name', 'Age', 'Occupation', 'Action'],
    rows: [
      {
        cells: ['John Doe', 30, 'Software Engineer'],
      },
      {
        cells: ['Jane Doe', 25, 'Teacher'],
      },
    ],
  };
  return (
    <div className="m-20 flex flex-col gap-10">
      <div className=" flex flex-col gap-5">
        <div className="flex items-center gap-10">
          <Button color="primary" size="large">
            Primary Button Large
          </Button>
          <Button color="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button color="primary" size="small">
            Primary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button disabled color="primary" size="large">
            Primary Button Large
          </Button>
          <Button disabled color="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button disabled color="primary" size="small">
            Primary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button leftIcon="search" color="primary" size="large">
            Primary Button Large
          </Button>
          <Button leftIcon="search" color="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button leftIcon="search" color="primary" size="small">
            Primary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button rightIcon="search" color="primary" size="large">
            Primary Button Large
          </Button>
          <Button rightIcon="search" color="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button rightIcon="search" color="primary" size="small">
            Primary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button color="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button color="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button disabled color="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button disabled color="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button disabled color="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button leftIcon="search" color="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button leftIcon="search" color="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button leftIcon="search" color="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button rightIcon="search" color="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button rightIcon="search" color="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button rightIcon="search" color="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="only-text" size="large">
            Only-text Button Large
          </Button>
          <Button color="only-text" size="medium">
            Only-text Button Medium
          </Button>
          <Button color="only-text" size="small">
            Only-text Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button disabled color="only-text" size="large">
            Only-text Button Large
          </Button>
          <Button disabled color="only-text" size="medium">
            Only-text Button Medium
          </Button>
          <Button disabled color="only-text" size="small">
            Only-text Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="only-text" leftIcon="search" size="large">
            Only-text Button Large
          </Button>
          <Button color="only-text" leftIcon="search" size="medium">
            Only-text Button Medium
          </Button>
          <Button color="only-text" leftIcon="search" size="small">
            Only-text Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="only-text" rightIcon="search" size="large">
            Only-text Button Large
          </Button>
          <Button color="only-text" rightIcon="search" size="medium">
            Only-text Button Medium
          </Button>
          <Button color="only-text" rightIcon="search" size="small">
            Only-text Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="primary" variants="success" size="large">
            Primary Success Button Large
          </Button>
          <Button color="primary" variants="success" size="medium">
            Primary Success Button Medium
          </Button>
          <Button color="primary" variants="success" size="small">
            Primary Success Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="secondary" variants="success" size="large">
            Secondary Success Button Large
          </Button>
          <Button color="secondary" variants="success" size="medium">
            Secondary Success Button Medium
          </Button>
          <Button color="secondary" variants="success" size="small">
            Secondary Success Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="only-text" variants="success" size="large">
            Only-text Success Button Large
          </Button>
          <Button color="only-text" variants="success" size="medium">
            Only-text Success Button Medium
          </Button>
          <Button color="only-text" variants="success" size="small">
            Only-text Success Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="primary" variants="warning" size="large">
            Primary Warning Button Large
          </Button>
          <Button color="primary" variants="warning" size="medium">
            Primary Warning Button Medium
          </Button>
          <Button color="primary" variants="warning" size="small">
            Primary Warning Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="secondary" variants="warning" size="large">
            Secondary Warning Button Large
          </Button>
          <Button color="secondary" variants="warning" size="medium">
            Secondary Warning Button Medium
          </Button>
          <Button color="secondary" variants="warning" size="small">
            Secondary Warning Button Small
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button color="only-text" variants="warning" size="large">
            Only-text Warning Button Large
          </Button>
          <Button color="only-text" variants="warning" size="medium">
            Only-text Warning Button Medium
          </Button>
          <Button color="only-text" variants="warning" size="small" />
        </div>

        <div className="flex items-center gap-5">
          <Button onlyIcon={'search'} color="primary" size="large" />
          <Button onlyIcon={'search'} color="primary" size="medium" />
          <Button onlyIcon={'search'} color="primary" size="small" />
          <Button onlyIcon={'search'} color="secondary" size="large" />
          <Button onlyIcon={'search'} color="secondary" size="medium" />
          <Button onlyIcon={'search'} color="secondary" size="small" />
          <Button onlyIcon={'search'} color="only-text" size="large" />
          <Button onlyIcon={'search'} color="only-text" size="medium" />
          <Button onlyIcon={'search'} color="only-text" size="small" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center  gap-5">
          <Select size="large" data={data} />
          <Select data={data} />
          <Select size="small" data={data} />
        </div>
        <div className="flex items-center  gap-5">
          <Select error="Error" size="large" data={data} />
          <Select error="Error" data={data} />
          <Select error="Error" size="small" data={data} />
        </div>
      </div>

      <div>
        <Table data={data2} />
      </div>
    </div>
  );
}

export default App;
