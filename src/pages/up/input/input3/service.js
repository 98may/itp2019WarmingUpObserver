import request from '@/utils/request';

export async function fakeSubmitForm(params) {
  console.log(params);

  return request('/api/upstream/invest?' + 'userId='+params.userId + '&TInvest='+params.TInvest + '&MInvest='+params.MInvest, {
    method: 'POST',
    data: params,
  });
}
