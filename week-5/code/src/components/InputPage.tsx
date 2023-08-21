import Button from "./ui/Button";
import Input from "./ui/Input";

const InputPage = () => {
  return (
    <div className="grid grid-rows-4 gap-10">
      <div className="grid grid-cols-3 items-center gap-5">
        <Input id="name" size="large" color="primary" type="text" />
        <Input id="name" size="medium" color="primary" type="text" />
        <Input id="name" size="small" color="primary" type="text" />
      </div>

      <div className="grid grid-cols-3  gap-5">
        <Input id="name" size="large" color="secondary" type="text" />
        <Input id="name" size="medium" color="secondary" type="text" />
        <Input id="name" size="small" color="secondary" type="text" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Input id="name" size="large" color="tertiary" type="text" />
        <Input id="name" size="medium" color="tertiary" type="text" />
        <Input id="name" size="small" color="tertiary" type="text" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Input disabled id="name" size="large" color="tertiary" type="text" />
        <Input disabled id="name" size="medium" color="tertiary" type="text" />
        <Input disabled id="name" size="small" color="tertiary" type="text" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Input
          errorMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam!"
          id="name"
          size="large"
          color="tertiary"
          type="text"
        />
        <Input
          errorMessage="Error"
          id="name"
          size="medium"
          color="tertiary"
          type="text"
        />
        <Input
          errorMessage="error"
          id="name"
          size="small"
          color="tertiary"
          type="text"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <Input isSuccess id="name" size="large" color="primary" type="text" />
        </div>
        <Input isSuccess id="name" size="medium" color="primary" type="text" />
        <Input isSuccess id="name" size="small" color="primary" type="text" />
      </div>
      <div className="flex items-end">
        <Input id="name" size="large" color="primary" type="text" />
        <Button color="primary" variant="primary" size="large">
          Primary Button Large
        </Button>
      </div>
      <div className="flex items-end">
        <Input id="name" size="medium" color="primary" type="text" />
        <Button color="primary" variant="primary" size="medium">
          Primary Button Large
        </Button>
      </div>
      <div className="flex items-end">
        <Input id="name" size="small" color="primary" type="text" />
        <Button color="primary" variant="primary" size="small">
          Primary Button Large
        </Button>
      </div>
    </div>
  );
};

export default InputPage;
