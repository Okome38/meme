using Microsoft.AspNetCore.Mvc;
using seibuDatabase.Models;
using seibuDatabase.Services;

namespace seibuDatabase.Controllers
{
    public class DemoGomenCounterController : Controller
    {
        private readonly FirebaseService _firebaseService;
        private const string ADMIN_PASSWORD = "seibu2025"; // パスワードを設定

        public DemoGomenCounterController()
        {
            _firebaseService = new FirebaseService();
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var counter = await _firebaseService.GetDemoGomenCounter();
            return View(counter);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateCounter(string password, bool isDemoGomen, string updatedBy)
        {
            if (string.IsNullOrEmpty(password) || password != ADMIN_PASSWORD)
            {
                TempData["Error"] = "パスワードが正しくありません。";
                return RedirectToAction("Index");
            }

            if (string.IsNullOrEmpty(updatedBy))
            {
                updatedBy = "匿名";
            }

            await _firebaseService.UpdateDemoGomenCounter(isDemoGomen, updatedBy);
            
            TempData["Success"] = isDemoGomen ? "でもごめんカウンターを更新しました！" : "非でもごめんカウンターを更新しました！";
            return RedirectToAction("Index");
        }

        [HttpPost]
        public async Task<IActionResult> ResetCounter(string password, string resetBy)
        {
            if (string.IsNullOrEmpty(password) || password != ADMIN_PASSWORD)
            {
                TempData["Error"] = "パスワードが正しくありません。";
                return RedirectToAction("Index");
            }

            if (string.IsNullOrEmpty(resetBy))
            {
                resetBy = "匿名";
            }

            await _firebaseService.ResetDemoGomenCounter(resetBy);
            
            TempData["Success"] = "カウンターをリセットしました！";
            return RedirectToAction("Index");
        }
    }
}
