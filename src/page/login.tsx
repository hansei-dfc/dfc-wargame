

function login() {
  return (
      <div className="w-full h-[600px] flex items-center justify-center mt-10">
        <div className='w-3/4 h-full flex items-center justify-center'>
          <div className='w-[417px] h-[504px] bg-stone-200 flex flex-col items-center'>
            <div className='w-3/4 h-[120px] text-black font-bold flex items-center justify-center text-3xl'>
              로그인
            </div>
            <div className='w-3/4 flex justify-center items-center flex-col mb-4'>
              <div className='w-full text-black font-[1000] mb-2'>
                아이디
              </div>
              <input placeholder=" 아이디를 입력하세요" className='bg-stone-200 w-[295px] h-[40px] border-solid border-2 border-stone-300'></input>
            </div>
            <div className='w-3/4 flex justify-center items-center flex-col mt-2'>
              <div className='w-full text-black font-[1000] mb-2'>
                패스워드
              </div>
              <input placeholder=" 패스워드를 입력하세요" className='bg-stone-200 w-[295px] h-[40px] border-solid border-2 border-stone-300'></input>
            </div>

            <div className='w-3/4 h-[100px] flex items-center justify-center flex-col mt-6'>
              <button className='w-[158px] h-[54px] bg-black text-stone-100 text-2xl font-bold'>로그인</button>
            </div>
              <a href='' className='text-[#6AB8FF] text-[12px]'>
                비밀번호를 잊으셨습니까?
              </a>
              <a href='' className='text-[#6AB8FF] text-[12px]'>
                계정 생성
              </a>
          </div>
        </div>
      </div>
  );
}

export default login;