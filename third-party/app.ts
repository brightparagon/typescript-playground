interface ABC {
  a: string;
}

const gow = (abc: ABC) => {
  console.log('wow')
  console.log(abc)
}

const abc = {
  a: '??????'
}

gow(abc)
