from io import StringIO

from pandas import read_csv, notnull


def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]


def load_drugs_gen(filename="resstr_utf.csv"):
    with open(filename, "r") as f:
        df = read_csv(StringIO(f.read()), sep=";")

    columns = {
        "ID": "id",
        "Торгівельне найменування": "name",
        "Міжнародне непатентоване найменування": "generic_name",
        "Форма випуску": "form_factor",
        "Склад (діючі)": "components",
        "Фармакотерапевтична група": "drug_class",
        "Заявник: назва українською": "producer",
        "Заявник: країна": "country",
        "Номер Реєстраційного посвідчення": "reg_id",
        "Умови відпуску": "is_recipe_needed",
        "Тип ЛЗ": "is_imunobiologic",
        "Гомеопатичний ЛЗ": "is_homeopaty",
        "ЛЗ біологічного походження": "is_biologic",
        "ЛЗ рослинного походження": "is_herbal",
        "URL інструкції": "instructuion_url"
    }

    df = df.rename(columns=columns).replace(
      {
          'is_homeopaty': {'Так': True, 'Ні': False},
          'is_imunobiologic': {'Імунобіологічний': True, 'Звичайний': False},
          'is_biologic': {'Так': True, 'Ні': False},
          'is_herbal': {'Так': True, 'Ні': False}
      }
    )

    df = df.drop(
        set(df.columns).symmetric_difference(set(columns.values())),
        axis=1
    ).where(notnull(df), None)

    return chunks(
        list(df.to_dict(orient="id").values()),
        999
    )
