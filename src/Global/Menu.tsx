export const Dropdown = {
  dropdownParoquia: [
    {
      "icon": "",
      "title": "História",
      "path": ""
    },
    {
      "icon": "",
      "title": "Redentoristas",
      "path": "/testemunhos"
    }
  ],
  dropdownComunidades: [
    {
      "icon": "",
      "title": "Comunidade 01",
      "path": ""
    },
    {
      "icon": "",
      "title": "Comunidade 02",
      "path": "/testemunhos"
    }
  ]
}

export const Menu = [
  {
    "icon": "",
    "title": "Início",
    "path": "/" 
  },
  {
    "icon": "",
    "title": "A Paróquia",
    "dropdown": Dropdown.dropdownParoquia
  },
  {
    "icon": "",
    "title": "Comunidades",
    "dropdown": Dropdown.dropdownComunidades
  },
  {
    "icon": "",
    "title": "Galeria",
    "path": "/"
  }
]