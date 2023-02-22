enum Condensed {
  CondensedOnly = 1,
  ExpandedOnly = 2,
  Both = 3,
}

export interface Image {
  key: string
  src: string
  position: string
  condensed: Condensed
}

const images = [
  { key: 'young-lady', src: 'student-young-lady.jpg', position: 'top center', condensed: Condensed.Both },
  { key: 'student-afro-boy', src: 'student-afro-boy.jpg', position: 'top right', condensed: Condensed.Both },
  { key: 'student-afro-man', src: 'student-afro-man.jpg', position: 'top left', condensed: Condensed.ExpandedOnly },
  { key: 'student-in-shop', src: 'student-boy-in-shop.jpg', position: 'top right', condensed: Condensed.ExpandedOnly },
  { key: 'lady-in-field', src: 'lady-reading-in-field.jpg', position: 'top right', condensed: Condensed.ExpandedOnly }
] as Image[];

const getImage = (key: string | undefined, condensed?: boolean): Image => {
  const compare = (i: Image) => i.key === key
    && i.condensed !== (condensed !== false ? Condensed.ExpandedOnly : Condensed.CondensedOnly);

  const image = images.find(compare);
  return image ?? images[0];
};

export default getImage;
