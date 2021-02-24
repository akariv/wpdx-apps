import dataflows as DF
def test(package):
    print(package.pkg.descriptor)
    yield package.pkg
    yield from package

DF.Flow(
    DF.load('/Users/adam/Code/wpdx/dgp-wpdx/data-analysis/Datarobot/predictions.csv'),
    DF.concatenate(fields=dict(
        status=['status_id (1)'],
        lat=['lat_deg (1)'],
        lon=['lon_deg (1)'],
        status_0=['Status Today'],
        status_0_prob=['Status Today Prob'],
        status_1=['Status +1'],
        status_1_prob=['Status +1 Prob'],
        status_3=['Status +3'],
        status_3_prob=['Status +3 Prob'],
        clean_country_name=['clean_country_name (1)'],
        clean_adm1=['clean_adm1 (1)'],
        clean_adm2=['clean_adm2 (1)'],
        clean_adm3=[],
    )),
    DF.filter_rows(lambda r: r['status_0'] or r['status_1'] or r['status_3']),
    DF.update_resource(-1, path='datarobot_slim.csv'),
    # DF.dump_to_path('.'),
    # DF.checkpoint('predictions1'),
    DF.join_with_self('concat', ['clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3'], dict(
        clean_country_name=None, clean_adm1=None, clean_adm2=None, clean_adm3=None
    )),
#     DF.update_resource(-1, path='datarobot_slim_adm_levels.json'),
    DF.printer(),
    # DF.validate(),
    DF.dump_to_path('out', format='json'),
    test,
).process()