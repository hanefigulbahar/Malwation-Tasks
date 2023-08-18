import Button from "./ui/Button";

const ButtonPage = () => {
  return (
    <div className="grid grid-rows-4 gap-10">
      <div className="grid  gap-5">
        <div>Primary Buttun Group</div>
        <div className="flex items-center gap-10">
          <Button color="primary" variant="primary" size="large">
            Primary Button Large
          </Button>
          <Button color="primary" variant="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button color="primary" variant="primary" size="small">
            Primary Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button color="secondary" variant="primary" size="large">
            Primary Button Large
          </Button>
          <Button color="secondary" variant="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button color="secondary" variant="primary" size="small">
            Primary Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button color="tertiary" variant="primary" size="large">
            Primary Button Large
          </Button>
          <Button color="tertiary" variant="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button color="tertiary" variant="primary" size="small">
            Primary Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button disabled color="tertiary" variant="primary" size="large">
            Primary Button Large
          </Button>
          <Button disabled color="tertiary" variant="primary" size="medium">
            Primary Button Medium
          </Button>
          <Button disabled color="tertiary" variant="primary" size="small">
            Primary Button Small
          </Button>
        </div>
      </div>

      <div className="grid  gap-5">
        <div>Secondary Buttun Group</div>
        <div className="flex items-center gap-10">
          <Button color="primary" variant="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button color="primary" variant="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button color="primary" variant="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button color="secondary" variant="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button color="secondary" variant="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button color="secondary" variant="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button color="tertiary" variant="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button color="tertiary" variant="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button color="tertiary" variant="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>

        <div className="flex items-center gap-10">
          <Button disabled color="primary" variant="secondary" size="large">
            Secondary Button Large
          </Button>
          <Button disabled color="primary" variant="secondary" size="medium">
            Secondary Button Medium
          </Button>
          <Button disabled color="primary" variant="secondary" size="small">
            Secondary Button Small
          </Button>
        </div>
      </div>

      <div className="grid  gap-5">
        <div>Only Text Button Group</div>
        <div className="flex items-center gap-10">
          <Button color="primary" variant="textOnly" size="large">
            Only Text Button Large
          </Button>
          <Button color="primary" variant="textOnly" size="medium">
            Only Text Button Medium
          </Button>
          <Button color="primary" variant="textOnly" size="small">
            Only Text Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button color="secondary" variant="textOnly" size="large">
            Only Text Button Large
          </Button>
          <Button color="secondary" variant="textOnly" size="medium">
            Only Text Button Medium
          </Button>
          <Button color="secondary" variant="textOnly" size="small">
            Only Text Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button color="tertiary" variant="textOnly" size="large">
            Only Text Button Large
          </Button>
          <Button color="tertiary" variant="textOnly" size="medium">
            Only Text Button Medium
          </Button>
          <Button color="tertiary" variant="textOnly" size="small">
            Only Text Button Small
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button disabled color="primary" variant="textOnly" size="large">
            Only Text Button Large
          </Button>
          <Button disabled color="primary" variant="textOnly" size="medium">
            Only Text Button Medium
          </Button>
          <Button disabled color="primary" variant="textOnly" size="small">
            Only Text Button Small
          </Button>
        </div>
      </div>

      <div className="grid  gap-5">
        <div>Only Icon Button Group</div>
        <div className="flex items-center gap-5">
          <Button
            isLoading
            icon={"search"}
            color="primary"
            variant="primary"
            size="large"
          />
          <Button
            icon={"search"}
            color="primary"
            variant="primary"
            size="medium"
          />
          <Button
            icon={"search"}
            color="primary"
            variant="primary"
            size="small"
          />
          <Button
            isLoading
            icon={"search"}
            color="primary"
            variant="secondary"
            size="large"
          />
          <Button
            icon={"search"}
            color="primary"
            variant="secondary"
            size="medium"
          />
          <Button
            icon={"search"}
            color="primary"
            variant="secondary"
            size="small"
          />
          <Button
            isLoading
            icon={"search"}
            color="primary"
            variant="textOnly"
            size="large"
          />
          <Button
            icon={"search"}
            color="primary"
            variant="textOnly"
            size="medium"
          />
          <Button
            icon={"search"}
            color="primary"
            variant="textOnly"
            size="small"
          />
        </div>

        <div className="flex items-center gap-5">
          <Button
            icon="search"
            color="secondary"
            variant="primary"
            size="large"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="primary"
            size="medium"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="primary"
            size="small"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="secondary"
            size="large"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="secondary"
            size="medium"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="secondary"
            size="small"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="textOnly"
            size="large"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="textOnly"
            size="medium"
          />
          <Button
            icon={"search"}
            color="secondary"
            variant="textOnly"
            size="small"
          />
        </div>

        <div className="flex items-center gap-5">
          <Button
            icon={"search"}
            color="tertiary"
            variant="primary"
            size="large"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="primary"
            size="medium"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="primary"
            size="small"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="secondary"
            size="large"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="secondary"
            size="medium"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="secondary"
            size="small"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="textOnly"
            size="large"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="textOnly"
            size="medium"
          />
          <Button
            icon={"search"}
            color="tertiary"
            variant="textOnly"
            size="small"
          />
        </div>

        <div className="flex items-center gap-5">
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="primary"
            size="large"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="primary"
            size="medium"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="primary"
            size="small"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="secondary"
            size="large"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="secondary"
            size="medium"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="secondary"
            size="small"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="textOnly"
            size="large"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="textOnly"
            size="medium"
          />
          <Button
            disabled
            icon={"search"}
            color="tertiary"
            variant="textOnly"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
