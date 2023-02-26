import { Property } from './Property';
import { ValidationError } from './ValidationErrors';

export class Validator {
  private readonly props: Property[];

  constructor() {
    this.props = [] as Property[];
  }

  public prop = (name: string) => {
    const contains = this.props.findIndex(p => p.getName() === name);
    if (contains !== -1) throw new Error(`Validator already contains validation rules for property ${name}`);
    const prop = new Property(name);
    this.props.push(prop);
    return prop;
  };

  public validate = async (item: any) => {
    let results = [] as ValidationError[];

    await Promise.all(this.props.map(async (property) => {
      const errors = await property.validate(item);
      if (errors) results = results.concat(errors);
    }));

    return results;
  };

  public string = (name: string) => this.prop(name).string();

  public number = (name: string) => this.prop(name).number();

  public bool = (name: string) => this.prop(name).bool();

  public date = (name: string) => this.prop(name).date();

  public array = (name: string) => this.prop(name).array();
}
