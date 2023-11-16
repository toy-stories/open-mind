import { fetchClient } from 'utils/apiClient';
import Swal from 'sweetalert2';

export const handleDeleteUser = async (subjectOwner) => {
  Swal.fire({
    title:
      '[주의] 계정 삭제는 복구할 수 없으며, 모든 데이터가 영구적으로 제거됩니다.',
    text: '계속하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '계정삭제',
    cancelButtonText: '취소',
  }).then((result) => {
    if (result.isConfirmed) {
      fetchClient({
        url: `subjects/${subjectOwner.id}/`,
        method: 'DELETE',
      }).then((result) => {
        localStorage.removeItem('userId');
        Swal.fire({
          title: '계정삭제완료',
          text: '계정이 삭제되었습니다. 메인페이지로 돌아갑니다.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: '확인',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.replace('/');
          }
        });
      });
    }
  });
};
